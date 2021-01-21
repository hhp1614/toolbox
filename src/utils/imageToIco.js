class Helper {
  /**
   * 创建 canvas
   * @private
   * @param {number} size 大小
   * @return {HTMLCanvasElement}
   */
  createCanvas(size) {
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    return canvas
  }

  /**
   * 转换图片为 URL
   * @private
   * @param {string|File} source 图片文件或图片地址
   * @return {Promise<string>}
   */
  async converImageURL(source) {
    return new Promise(async (resolve, reject) => {
      if (typeof source === 'string') {
        // 请求图片地址，并为其生成 BlobURL，解决图片跨域导致 canvas 污染的问题
        const res = await fetch(source, { method: 'get' })
        const blob = await res.blob()
        resolve(URL.createObjectURL(blob))
      } else if (source instanceof File) {
        resolve(URL.createObjectURL(source))
      } else {
        reject('参数 `opt.source` 无法识别')
      }
    })
  }

  /**
   * 绘制图像
   * @private
   * @param {HTMLCanvasElement} canvas canvas 元素
   * @param {HTMLImageElement} img img 元素
   * @param {'square' | 'circle' | 'fillet'} shape 形状
   * @param {boolean} bleed 留白
   * @return {*} ctx
   */
  drawImage(canvas, img, shape, bleed) {
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return console.error('`ctx` 为空')
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 计算图像被绘制的宽高。比较短的一边占满画布，比较长的一边则根据比例计算绘制的部分
    let dw, dh
    if (img.naturalWidth < img.naturalHeight) {
      // 竖图
      dw = canvas.width
      dh = (dw / img.naturalWidth) * img.naturalHeight
    } else {
      // 横图
      dh = canvas.height
      dw = (dh / img.naturalHeight) * img.naturalWidth
    }

    // 绘制方形
    if (shape === 'square') {
      ctx.drawImage(img, 0, 0, dw, dh)
    }

    // 绘制圆形
    if (shape === 'circle') {
      const r = canvas.width / 2
      ctx.save()
      ctx.beginPath()
      ctx.arc(r, r, r, 0, Math.PI * 2, false)
      ctx.clip()
      ctx.drawImage(img, 0, 0, dw, dh)
      ctx.restore()
    }

    // 绘制圆角矩形
    if (shape === 'fillet') {
      let x = 0
      let y = 0
      // 当图标尺寸大于 16 时，设置留白距离
      if (bleed && canvas.width > 16) {
        // 规定留白的比例，即尺寸为 256 时四周留白均为 10 px
        const num = 10 / 256
        x = y = Math.ceil(num * canvas.width)
      }
      // 去掉留白后，最后要保存的图片区域的宽高
      const w = canvas.width - x * 2
      const h = canvas.height - y * 2
      // 圆角的半径，设置为保留区域宽高的 1/8
      const r = Math.floor(w / 8)

      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y, x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x, y + h, r)
      ctx.arcTo(x, y + h, x, y, r)
      ctx.arcTo(x, y, x + w, y, r)
      ctx.closePath()
      ctx.clip()
      ctx.drawImage(img, 0, 0, dw, dh)
    }

    return ctx
  }

  /**
   * 获取 png 图像的 blob
   * @param canvas {HTMLCanvasElement} canvas 元素
   * @return {Promise<Blob>}
   */
  async getPngBlob(canvas) {
    return new Promise(async (resolve, reject) => {
      canvas.toBlob(blob => {
        !blob ? reject('`blob` 为空') : resolve(blob)
      })
    })
  }

  /**
   * 加载图片
   * @param source {string|File} 图片文件或图片地址
   * @return {Promise<HTMLImageElement>}
   */
  async loadImage(source) {
    return new Promise(async resolve => {
      const imgURL = await this.converImageURL(source)
      const img = document.createElement('img')
      img.src = imgURL
      img.onload = () => resolve(img)
    })
  }

  /**
   * 创建图像缓冲区
   * @param {HTMLImageElement} img 图片
   * @param {number[]} size 图片大小
   * @param {'square' | 'circle' | 'fillet'} shape 图片形状
   * @param {boolean} bleed 是否留白
   * @return {Promise<{ size: number, buffer: ArrayBuffer }[]>}
   */
  async createPngBuffer(
    img,
    size = [16, 48, 96, 256],
    shape = 'square',
    bleed = true
  ) {
    return new Promise(async resolve => {
      const buffer = []
      let length = size.length
      while (length > 0) {
        const sizeNumber = size[size.length - length]
        const canvas = this.createCanvas(sizeNumber)
        // 绘制图像
        this.drawImage(canvas, img, shape, bleed)
        // 把图像转换为 png 图像
        const pngBlob = await this.getPngBlob(canvas)
        // 获取 png 图像的 buffer
        const buf = await pngBlob.arrayBuffer()
        buffer.push({ size: sizeNumber, buffer: buf })
        length--
        length === 0 && resolve(buffer)
      }
    })
  }

  /**
   * 创建 ico 文件
   * @param {Object[]} pngData 图片数据
   * @param {number} pngData.size 图片大小
   * @param {ArrayBuffer} pngData.buffer 图片缓冲区
   * @return {Blob}
   */
  createIcon(pngData) {
    const fileData = []
    const fileHeadSize = 6

    // icon 文件头
    const fileHead = new ArrayBuffer(fileHeadSize)
    const v1 = new DataView(fileHead)
    v1.setInt16(0, 0, true) // idReserved
    v1.setInt16(2, 1, true) // idType
    v1.setInt16(4, pngData.length, true) // idCount
    fileData.push(fileHead)

    // 添加 icon 文件入口
    const entrySize = 16
    const entryTotalSize = entrySize * pngData.length
    let fileOffset = fileHeadSize + entryTotalSize
    let fileLength = 0

    for (const d of pngData) {
      fileOffset += fileLength

      const entry = new ArrayBuffer(entrySize)
      const v2 = new DataView(entry)
      v2.setInt8(0, d.size) // Width, in pixels, of the image
      v2.setInt8(1, d.size) // Height, in pixels, of the image
      v2.setInt8(2, 0) // Number of colors in image (0 if >=8bpp)
      v2.setInt8(3, 0) // Reserved ( must be 0)
      v2.setInt16(4, 1, true) // Color Planes
      v2.setInt16(6, 32, true) // Bits per pixel
      v2.setInt32(8, d.buffer.byteLength, true) // How many bytes in this resource?
      v2.setInt32(12, fileOffset, true) // Where in the file is this image?

      fileData.push(entry)

      fileLength = d.buffer.byteLength
    }

    // 添加 png 数据
    for (const d of pngData) {
      fileData.push(d.buffer)
    }

    // 生成 blob 对象
    return new Blob(fileData, { type: 'image/vnd.microsoft.icon' })
  }
}

class ImageToIco {
  /**
   * 图片转换为 ico 图标
   * @param {Object} opt 选项
   * @param {string|File} opt.source 图片文件或图片地址
   * @param {number[]} opt.size 图片大小
   * @param {'square' | 'circle' | 'fillet'} opt.shape 图片形状
   * @param {boolean} [opt.bleed=true] 图片留白
   * @return {Promise<Blob>}
   */
  convert(opt) {
    return new Promise(async resolve => {
      const helper = new Helper()

      // 加载图片
      const img = await helper.loadImage(opt.source)
      // 生成各尺寸的 png 图像数据
      const pngDataArray = await helper.createPngBuffer(
        img,
        opt.size,
        opt.shape,
        opt.bleed
      )
      // 创建 ico 文件
      const blob = helper.createIcon(pngDataArray)

      resolve(blob)
    })
  }
}

export default new ImageToIco()
