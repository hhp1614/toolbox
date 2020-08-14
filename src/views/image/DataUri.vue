<template>
  <div class="mdui-row">
    <div ref="tab" class="mdui-tab">
      <a href="#image2uri" class="mdui-ripple">图片转 URI</a>
      <a href="#uri2image" class="mdui-ripple">URI 转图片</a>
    </div>
    <!-- 图片转 URI -->
    <div id="image2uri">
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
      <img
        v-if="blobURL"
        :src="blobURL"
        alt="预览图片"
        style="max-height: 200px; max-width: 100%"
        class="mdui-shadow-3"
      />
      <div class="mdui-m-y-2">
        <mdui-btn class="mdui-m-r-2" color="theme-accent" @click="getDataURI" :disabled="!file" raised ripple>
          <mdui-icon type="keyboard_arrow_down" />转换
        </mdui-btn>
      </div>
      <editor v-model="dataURI" class="line-10" label="Data URI" :line-numbers="false" read-only />
    </div>
    <!-- URI 转图片 -->
    <div id="uri2image">
      <editor v-model="inputURI" class="line-10" label="Data URI" :line-numbers="false" />
      <div class="mdui-m-y-2">
        <mdui-btn class="mdui-m-r-2" color="theme-accent" @click="checkURI" :disabled="!file" raised ripple>
          <mdui-icon type="keyboard_arrow_down" />转换
        </mdui-btn>
      </div>
      <img
        v-if="imgURI"
        :src="imgURI"
        alt="预览图片"
        style="max-height: 200px; max-width: 100%"
        class="mdui-shadow-3"
        @error="loadError"
      />
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64';

export default {
  name: 'DataUri',
  data() {
    return {
      tab: null,
      file: null,
      dataURI: '',
      inputURI: '',
      imgURI: ''
    };
  },
  computed: {
    blobURL() {
      return this.file ? window.URL.createObjectURL(this.file) : '';
    }
  },
  mounted() {
    this.tab = new this.$Tab(this.$refs.tab);
  },
  methods: {
    // 选择图片
    selectImage(e) {
      this.file = e.target.files[0];
    },
    // 图片转换成 URI
    getDataURI() {
      const fr = new FileReader();
      fr.readAsBinaryString(this.file);
      fr.onload = () => {
        this.dataURI = `data:${this.file.type};base64,${Base64.btoa(String(fr.result))}`;
      };
    },
    // DataURI 转换成图片
    checkURI() {
      if (/^data:image\/.+;base64,/.exec(this.inputURI)) {
        this.imgURI = this.inputURI;
        return;
      }
      this.$snackbar('Data URI 格式错误');
    },
    // 图片加载失败
    loadError() {
      this.imgURI = '';
      this.$snackbar('Data URI 无法解析');
    }
  }
};
</script>
