<template>
  <div class="mdui-row">
    <editor
      class="line-5"
      label="编码前"
      :value="beforeCoding"
      @input="acUpdateBeforeCoding"
    />
    <action-bar>
      <mdui-btn
        class="mdui-m-r-2"
        color="theme-accent"
        @click="encode"
        raised
        ripple
      >
        <mdui-icon type="keyboard_arrow_down" />编码
      </mdui-btn>
      <mdui-btn class="mdui-m-r-2" color="theme" @click="decode" raised ripple>
        <mdui-icon type="keyboard_arrow_up" />解码
      </mdui-btn>
      <select
        ref="select"
        :value="mode"
        class="mdui-select"
        @change="acUpdateMode($event.target.value)"
        mdui-select
      >
        <option value="htmlEntity">HTML 字符实体（&#x26;#____;）</option>
        <option value="unicode">Unicode 编码（\u____）</option>
      </select>
      <template v-if="mode === 'htmlEntity'">
        <mdui-checkbox
          mdui-tooltip="{content: '不勾选时，英文数字以及不需要转义的字符不会被编码'}"
          label="全部编码"
          :checked="htmlEntity.allCoding"
          @change="acUpdateHtmlEntity('allCoding')"
        />
        <mdui-checkbox
          mdui-tooltip="{content: '&#x26;#xA9; =&#x3E; &#x26;#169;'}"
          label="编码使用十进制表示"
          :checked="htmlEntity.decimal"
          @change="acUpdateHtmlEntity('decimal')"
        />
        <mdui-checkbox
          mdui-tooltip="{content: '&#x26;#x26; => &#x26;amp;'}"
          label="编码使用实体名称"
          :checked="htmlEntity.entity"
          @change="acUpdateHtmlEntity('entity')"
        />
      </template>
      <template v-else>
        <mdui-checkbox
          mdui-tooltip="{content: '不勾选时，英文数字以及不需要转义的字符不会被编码'}"
          label="全部编码"
          :checked="unicode.allCoding"
          @change="acUpdateUnicode('allCoding')"
        />
      </template>
    </action-bar>
    <editor
      class="line-5"
      label="编码后"
      :value="afterCoding"
      @input="acUpdateAfterCoding"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import he from 'he'

export default {
  name: 'CryptoUnicode',
  data() {
    return {
      select: null
    }
  },
  computed: {
    ...mapState('crypto/unicode', [
      'beforeCoding',
      'afterCoding',
      'htmlEntity',
      'unicode',
      'mode'
    ]),
    heOptions() {
      return {
        encodeEverything: this.htmlEntity.allCoding,
        decimal: this.htmlEntity.decimal,
        useNamedReferences: this.htmlEntity.entity
      }
    }
  },
  mounted() {
    this.select = new this.$Select(this.$refs.select)
  },
  methods: {
    ...mapActions('crypto/unicode', [
      'acUpdateBeforeCoding',
      'acUpdateAfterCoding',
      'acUpdateHtmlEntity',
      'acUpdateUnicode',
      'acUpdateMode'
    ]),
    // 事件：编码
    encode() {
      switch (this.mode) {
        case 'htmlEntity': {
          const afterCoding = he.encode(this.beforeCoding, this.heOptions)
          this.acUpdateAfterCoding(afterCoding)
          break
        }
        case 'unicode': {
          const afterCoding = this.unicodeEncode(this.beforeCoding)
          this.acUpdateAfterCoding(afterCoding)
          break
        }
      }
    },
    // 事件：解码
    decode() {
      switch (this.mode) {
        case 'htmlEntity': {
          try {
            const beforeCoding = he.decode(this.afterCoding, this.heOptions)
            this.acUpdateBeforeCoding(beforeCoding)
          } catch {
            this.$snackbar('编码失败')
          }
          break
        }
        case 'unicode': {
          try {
            const beforeCoding = this.unicdoeDecode(this.afterCoding)
            this.acUpdateBeforeCoding(beforeCoding)
          } catch {
            this.$snackbar('解码失败')
          }
          break
        }
      }
    },
    // Unicode 编码
    unicodeEncode(value) {
      let result = ''
      for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i)
        if (!this.unicode.allCoding && 32 <= code && code <= 126) {
          // 排除英文，数字及不需要转义的字符
          result += value[i]
        } else {
          const str = code.toString(16)
          result += '\\u' + str.slice(-4).padStart(4, '0')
        }
      }
      return result
    },
    // Unicode 解码
    unicdoeDecode(value) {
      return value
        .replace(/(\\)?\\u/g, '\\u')
        .replace(/\\u[\da-f]{4}/gi, match => {
          const code = Number('0x' + match.substring(2))
          return String.fromCodePoint(code)
        })
    }
  }
}
</script>
