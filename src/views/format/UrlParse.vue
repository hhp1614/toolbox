<template>
  <div id="format-url-params" class="mdui-row">
    <editor class="line-5" mode="text" :value="url" @input="acUpdateURL" />
    <div class="mdui-m-t-1">
      <mdui-btn
        class="mdui-m-r-2"
        color="theme-accent"
        @click="parse"
        raised
        ripple
      >
        <mdui-icon type="keyboard_arrow_down" />解析
      </mdui-btn>
      <mdui-btn
        class="mdui-m-r-2"
        color="theme"
        @click="serialization"
        raised
        ripple
      >
        <mdui-icon type="keyboard_arrow_up" />序列化
      </mdui-btn>
      <mdui-checkbox
        mdui-tooltip="{content: '勾选后会将使用 URL 编码'}"
        label="URL 编码"
        :checked="urlEncode"
        @change="acUpdateUrlEncode"
      />
    </div>
    <editor
      class="line-20"
      mode="application/json"
      :value="json"
      @input="acUpdateJson"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import qs from 'qs';

export default {
  name: 'UrlParams',
  computed: {
    ...mapState('format/urlParse', ['url', 'json', 'urlEncode'])
  },
  methods: {
    ...mapActions('format/urlParse', [
      'acUpdateURL',
      'acUpdateJson',
      'acUpdateUrlEncode'
    ]),
    // 事件：解析 url
    parse() {
      const url = this.url.replace(/^.*\?/, '');
      const res = qs.parse(url);
      this.acUpdateJson(JSON.stringify(res, null, 2));
    },
    // 事件：序列化 json
    serialization() {
      try {
        const obj = JSON.parse(this.json);
        const url = qs.stringify(obj, { encode: this.urlEncode });
        this.acUpdateURL(url);
      } catch (err) {
        this.acUpdateURL('');
      }
    }
  }
};
</script>
