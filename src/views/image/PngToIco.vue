<template>
  <div class="mdui-row">
    <div class="mdui-m-y-2">
      <input type="file" id="select-image" accept="image/*" @change="selectImage" hidden />
      <label for="select-image" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme">
        选择图片
      </label>
      <template v-if="file">
        <mdui-btn class="mdui-m-l-2" color="red-600" @click="acUpdateFile(null)" raised ripple>
          <mdui-icon type="delete" />
          删除图片
        </mdui-btn>
        <div class="mdui-chip mdui-m-l-2">
          <span class="mdui-chip-icon mdui-color-red-600">
            <mdui-icon type="attach_file" />
          </span>
          <span class="mdui-chip-title">{{ file.name }}</span>
        </div>
        <div class="mdui-chip mdui-m-l-2">
          <span class="mdui-chip-icon mdui-color-yellow-600">
            <mdui-icon type="crop_free" />
          </span>
          <span class="mdui-chip-title">{{ file.size | fileSize }}</span>
        </div>
        <div class="mdui-chip mdui-m-l-2">
          <span class="mdui-chip-icon mdui-color-green-600">
            <mdui-icon type="insert_drive_file" />
          </span>
          <span class="mdui-chip-title">{{ file.type }}</span>
        </div>
      </template>
    </div>
    <div class="mdui-m-t-2">
      尺寸：
      <mdui-checkbox v-for="i in sizeList" :key="i" :label="i" :value="i" :checked="size" @change="acUpdateSize" />
    </div>
    <div class="mdui-m-t-2">
      形状：
      <mdui-radio
        v-for="i in shapeList"
        :key="i.value"
        :label="i.name"
        :value="i.value"
        :checked="shape"
        @change="changeShape"
      />
      <br />
      留白：
      <mdui-checkbox
        mdui-tooltip="{content: '此选项只在形状为“圆角矩形”时生效', position: 'right'}"
        label="启用"
        :checked="bleed"
        :disabled="shape !== 'fillet'"
        @change="acUpdateBleed"
      />
    </div>
    <img
      alt="预览图片"
      style="max-height: 200px; max-width: 100%"
      class="mdui-shadow-3"
      v-if="blobURL"
      :src="blobURL"
    />
    <paste-image @paste="pasteImage" v-else />
    <div class="mdui-m-t-2">
      <mdui-btn class="mdui-m-r-2" color="theme-accent" @click="convert" :disabled="!file" raised ripple>转换</mdui-btn>
      <mdui-btn class="mdui-m-r-2" v-if="icoUrl" color="theme" @click="() => $refs.download.click()" raised ripple>
        下载
      </mdui-btn>
    </div>
    <div class="mdui-m-t-2" v-if="icoUrl">
      <label class="mdui-textfield-label">效果预览</label>
      <img alt="效果预览" class="mdui-shadow-3" :src="icoUrl" />
    </div>
    <a style="display: none;" ref="download" :href="icoUrl" :download="icoName"></a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import imageToIco from '@/utils/imageToIco'

export default {
  name: 'PngToIco',
  data() {
    return {
      // 尺寸列表
      sizeList: [16, 32, 48, 96, 128, 256, 512],
      // 形状列表
      shapeList: [
        { value: 'square', name: '正方形' },
        { value: 'circle', name: '圆形' },
        { value: 'fillet', name: '圆角矩形' }
      ]
    }
  },
  computed: {
    ...mapState('image/pngToIco', ['file', 'size', 'shape', 'bleed', 'icoUrl', 'icoName']),
    // 图片转成的 URL
    blobURL() {
      return this.file ? window.URL.createObjectURL(this.file) : ''
    }
  },
  methods: {
    ...mapActions('image/pngToIco', [
      'acUpdateFile',
      'acUpdateSize',
      'acUpdateShape',
      'acUpdateBleed',
      'acUpdateIcoURL',
      'acUpdateIcoName'
    ]),
    // 选择图片
    selectImage(e) {
      this.acUpdateFile(e.target.files[0])
    },
    // 粘贴图片
    pasteImage(file) {
      this.acUpdateFile(file)
    },
    changeShape(val) {
      this.acUpdateShape(val)
      if (this.shape !== 'fillet') {
        this.acUpdateBleed(false)
      }
    },
    // 转换成 ico 图片文件
    async convert() {
      const blob = await imageToIco.convert({
        source: this.file,
        size: this.size,
        shape: this.shape,
        bleed: this.bleed
      })
      this.acUpdateIcoURL(URL.createObjectURL(blob))
      this.acUpdateIcoName(this.file.name.replace(/\.\w+$/, '.ico'))
    }
  }
}
</script>
