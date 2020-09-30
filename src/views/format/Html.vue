<template>
  <div class="mdui-row">
    <editor class="line-20" mode="htmlmixed" :value="code" @input="acUpdateCode" />
    <div class="mdui-m-t-1">
      <mdui-btn @click="format" dense ripple>格式化</mdui-btn>
      <mdui-btn @click="compress" dense ripple>压缩</mdui-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import parserBabylon from 'prettier/parser-babylon';
import parserPostcss from 'prettier/parser-postcss';
import Minimize from 'minimize';

// 压缩 HTML
const minimize = new Minimize(undefined, undefined);

// prettier 选项
const prettierOptions = {
  printWidth: 120,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid'
};

export default {
  name: 'Html',
  computed: {
    ...mapState('format/html', ['code'])
  },
  methods: {
    ...mapActions('format/html', ['acUpdateCode']),
    // 事件：格式化
    format() {
      const code = prettier.format(this.code, {
        parser: 'html',
        plugins: [parserHtml, parserBabylon, parserPostcss],
        ...prettierOptions
      });
      this.acUpdateCode(code);
    },
    // 事件：压缩
    compress() {
      const code = minimize.parse(this.code, undefined);
      this.acUpdateCode(code);
    }
  }
};
</script>
