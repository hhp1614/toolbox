<template>
  <div class="mdui-row">
    <editor class="line-5" label="编码前" :value="beforeCoding" @input="acUpdateBeforeCoding" />
    <action-bar>
      <mdui-btn class="mdui-m-r-2" color="theme-accent" @click="encode" raised ripple>
        <mdui-icon type="keyboard_arrow_down" />编码
      </mdui-btn>
      <mdui-btn class="mdui-m-r-2" color="theme" @click="decode" raised ripple>
        <mdui-icon type="keyboard_arrow_up" />解码
      </mdui-btn>
      <mdui-checkbox
        mdui-tooltip="{content: '用于作为 URL 参数的情况，即使用 encodeURIComponent() 或 decodeURIComponent() 来编解码'}"
        label="全部编码"
        :value="allCoding"
        @change="acUpdateAllCoding"
      />
      <mdui-checkbox
        mdui-tooltip="{content: '勾选后会将每行独立进行编解码'}"
        label="批量模式"
        :value="batchMode"
        @change="acUpdateBatchMode"
      />
    </action-bar>
    <editor class="line-5" label="编码后" :value="afterCoding" @input="acUpdateAfterCoding" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'CryptoUrlcode',
  computed: {
    ...mapState('crypto/urlcode', ['beforeCoding', 'afterCoding', 'allCoding', 'batchMode']),
    ...mapGetters(['cmTheme'])
  },
  methods: {
    ...mapActions('crypto/urlcode', [
      'acUpdateBeforeCoding',
      'acUpdateAfterCoding',
      'acUpdateAllCoding',
      'acUpdateBatchMode'
    ]),
    // 事件：编码
    encode() {
      let afterCoding;
      if (this.batchMode) {
        const lines = this.beforeCoding.split('\n').map(i => this.encodeMethod(i));
        afterCoding = lines.join('\n');
      } else {
        afterCoding = this.encodeMethod(this.beforeCoding);
      }
      this.acUpdateAfterCoding(afterCoding);
    },
    // 事件：解码
    decode() {
      let beforeCoding;
      if (this.batchMode) {
        const lines = this.afterCoding.split('\n').map(i => this.decodeMethod(i));
        beforeCoding = lines.join('\n');
      } else {
        beforeCoding = this.decodeMethod(this.afterCoding);
      }
      this.acUpdateBeforeCoding(beforeCoding);
    },
    // 编码方法
    encodeMethod(url) {
      return this.allCoding ? encodeURIComponent(url) : encodeURI(url);
    },
    // 解码方法
    decodeMethod(url) {
      return this.allCoding ? decodeURIComponent(url) : decodeURI(url);
    }
  }
};
</script>
