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
        mdui-tooltip="{content: '勾选后会将每行独立进行编解码'}"
        label="批量模式"
        :checked="batchMode"
        @change="acUpdateBatchMode"
      />
    </action-bar>
    <editor class="line-5" label="编码后" :value="afterCoding" @input="acUpdateAfterCoding" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { encode, decode } from 'js-base64';

export default {
  name: 'Base64',
  computed: {
    ...mapState('crypto/base64', ['beforeCoding', 'afterCoding', 'batchMode'])
  },
  methods: {
    ...mapActions('crypto/base64', ['acUpdateBeforeCoding', 'acUpdateAfterCoding', 'acUpdateBatchMode']),
    // 事件：编码
    encode() {
      let afterCoding;
      if (this.batchMode) {
        const lines = this.beforeCoding.split('\n').map(i => encode(i));
        afterCoding = lines.join('\n');
      } else {
        afterCoding = encode(this.beforeCoding);
      }
      this.acUpdateAfterCoding(afterCoding);
    },
    // 事件：解码
    decode() {
      let beforeCoding;
      if (this.batchMode) {
        const lines = this.afterCoding.split('\n').map(i => decode(i));
        beforeCoding = lines.join('\n');
      } else {
        beforeCoding = decode(this.afterCoding);
      }
      this.acUpdateBeforeCoding(beforeCoding);
    }
  }
};
</script>
