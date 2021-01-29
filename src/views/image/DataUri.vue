<template>
  <div class="mdui-row">
    <div ref="tab" class="mdui-tab">
      <a href="#image2uri" class="mdui-ripple">图片转 URI</a>
      <a href="#uri2image" class="mdui-ripple">URI 转图片</a>
    </div>
    <!-- 图片转 URI -->
    <div id="image2uri">
      <div class="mdui-m-y-2">
        <input
          type="file"
          id="select-image"
          accept="image/*"
          @change="selectImage"
          hidden
        />
        <label
          for="select-image"
          class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme"
        >
          选择图片
        </label>
        <template v-if="file">
          <mdui-btn
            class="mdui-m-l-2"
            color="red-600"
            @click="acUpdateFile(null)"
            raised
            ripple
          >
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
      <img
        v-if="blobURL"
        :src="blobURL"
        alt="预览图片"
        style="max-height: 200px; max-width: 100%"
        class="mdui-shadow-3"
      />
      <paste-image @paste="pasteImage" v-else />
      <div class="mdui-m-y-2">
        <mdui-btn
          class="mdui-m-r-2"
          color="theme-accent"
          @click="getDataUri"
          :disabled="!file"
          raised
          ripple
        >
          <mdui-icon type="keyboard_arrow_down" />转换
        </mdui-btn>
      </div>
      <editor
        class="line-10"
        :value="dataUri"
        label="Data URI"
        :line-numbers="false"
        read-only
      />
    </div>
    <!-- URI 转图片 -->
    <div id="uri2image">
      <editor
        class="line-10"
        :value="inputUri"
        @input="acUpdateInputUri"
        label="Data URI"
        :line-numbers="false"
      />
      <div class="mdui-m-y-2">
        <mdui-btn
          class="mdui-m-r-2"
          color="theme-accent"
          @click="checkUri"
          :disabled="!file"
          raised
          ripple
        >
          <mdui-icon type="keyboard_arrow_down" />转换
        </mdui-btn>
        <mdui-btn color="red-600" @click="acUpdateInputUri('')" raised ripple>
          <mdui-icon type="delete" />清空
        </mdui-btn>
      </div>
      <img
        alt="预览图片"
        style="max-height: 200px; max-width: 100%"
        class="mdui-shadow-3"
        v-if="imgUri"
        :src="imgUri"
        @error="loadError"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Base64 } from 'js-base64';

export default {
  name: 'DataUri',
  data() {
    return {
      tab: null
    };
  },
  computed: {
    ...mapState('image/dataUri', ['file', 'dataUri', 'inputUri', 'imgUri']),
    blobURL() {
      return this.file ? window.URL.createObjectURL(this.file) : '';
    }
  },
  mounted() {
    this.tab = new this.$Tab(this.$refs.tab);
  },
  methods: {
    ...mapActions('image/dataUri', [
      'acUpdateFile',
      'acUpdateDataUri',
      'acUpdateInputUri',
      'acUpdateImgUri'
    ]),
    // 事件：选择图片
    selectImage(e) {
      this.acUpdateFile(e.target.files[0]);
    },
    // 事件：粘贴图片
    pasteImage(file) {
      this.acUpdateFile(file);
    },
    // 事件：图片转换成 URI
    getDataUri() {
      const fr = new FileReader();
      fr.readAsBinaryString(this.file);
      fr.onload = () => {
        this.acUpdateDataUri(
          `data:${this.file.type};base64,${Base64.btoa(String(fr.result))}`
        );
      };
    },
    // 事件：DataURI 转换成图片
    checkUri() {
      if (/^data:image\/.+;base64,/.test(this.inputUri)) {
        this.acUpdateImgUri(this.inputUri);
        return;
      }
      this.$snackbar('Data URI 格式错误');
    },
    // 事件：图片加载失败
    loadError() {
      this.acUpdateInputUri('');
      this.$snackbar('Data URI 无法解析');
    }
  }
};
</script>
