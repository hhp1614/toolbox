<template>
  <div class="mdui-row">
    <div class="mdui-m-y-2">
      <input type="file" id="select-image" accept="image/*" @change="selectImage" hidden />
      <label for="select-image" class="mdui-btn mdui-btn-raised mdui-ripple">
        选择图片
      </label>
      <template v-if="file">
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
      <label class="mdui-checkbox mdui-p-l-3 mdui-m-l-2" v-for="i in sizeList" :key="i">
        <input type="checkbox" :value="i" v-model="size" />
        <i class="mdui-checkbox-icon"></i>
        {{ i }}
      </label>
    </div>
    <div class="mdui-m-t-2">
      形状：
      <label class="mdui-radio mdui-p-l-3 mdui-m-l-2" v-for="i in shapeList" :key="i.value">
        <input type="radio" :value="i.value" v-model="shape" @change="shape !== 'fillet' && (bleed = false)" />
        <i class="mdui-radio-icon"></i>
        {{ i.name }}
      </label>
      <br />
      留白：
      <mdui-checkbox
        v-model="bleed"
        mdui-tooltip="{content: '此选项只在形状为“圆角矩形”时生效', position: 'right'}"
        label="启用"
        :disabled="shape !== 'fillet'"
      />
    </div>
    <img
      alt="预览图片"
      style="max-height: 200px; max-width: 100%"
      class="mdui-shadow-3"
      v-if="blobURL"
      :src="blobURL"
    />
    <div class="mdui-m-t-2">
      <mdui-btn class="mdui-m-r-2" color="theme-accent" @click="convert" :disabled="!file" raised ripple>转换</mdui-btn>
      <mdui-btn class="mdui-m-r-2" v-if="icoUrl" color="theme" @click="() => $refs.download.click()" raised ripple>
        下载
      </mdui-btn>
    </div>
    <div class="mdui-m-t-2">
      <label class="mdui-textfield-label">效果预览</label>
      <img alt="效果预览" class="mdui-shadow-3" v-if="icoUrl" :src="icoUrl" />
    </div>
    <a style="display: none;" ref="download" :href="icoUrl" :download="icoName"></a>
  </div>
</template>

<script>
import imageToIco from '@/utils/imageToIco'

export default {
  name: 'PngToIco',
  data() {
    return {
      file: null,
      sizeList: [16, 32, 48, 96, 128, 256, 512],
      size: [16, 96, 256],
      shapeList: [
        { value: 'square', name: '正方形' },
        { value: 'circle', name: '圆形' },
        { value: 'fillet', name: '圆角矩形' }
      ],
      shape: 'square',
      bleed: false,
      icoUrl: '',
      icoName: ''
    }
  },
  computed: {
    blobURL() {
      return this.file ? window.URL.createObjectURL(this.file) : ''
    }
  },
  methods: {
    // 选择图片
    selectImage(e) {
      this.file = e.target.files[0]
    },
    // 转换成 ico 图片文件
    async convert() {
      const blob = await imageToIco.convert({
        source: this.file,
        size: this.size,
        shape: this.shape,
        bleed: this.bleed
      })
      this.icoUrl = URL.createObjectURL(blob)
      this.icoName = this.file.name.replace(/\.\w+$/, '.ico')
    }
  }
}
</script>
