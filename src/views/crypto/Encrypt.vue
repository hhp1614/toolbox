<template>
  <div class="mdui-row">
    <editor class="line-5" label="明文" :value="beforeCoding" @input="acUpdateBeforeCoding" />
    <editor class="line-1" label="秘钥" :value="secret" :line-numbers="false" @input="acUpdateSecret" />
    <action-bar>
      <mdui-btn class="mdui-m-r-2" color="theme-accent" @click="encrypt" raised ripple>
        <mdui-icon type="keyboard_arrow_down" />加密
      </mdui-btn>
      <mdui-btn class="mdui-m-r-2" color="theme" @click="decrypt" raised ripple>
        <mdui-icon type="keyboard_arrow_up" />解密
      </mdui-btn>
      <select ref="select" :value="mode" class="mdui-select" @change="acUpdateMode($event.target.value)" mdui-select>
        <option v-for="(item, index) in modeList" :key="index" :value="item">{{ item }}</option>
      </select>
    </action-bar>
    <editor class="line-5" label="密文" :value="afterCoding" @input="acUpdateAfterCoding" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Crypto from 'crypto-js'

export default {
  name: 'Crypto',
  data() {
    return {
      select: null,
      modeList: ['AES', 'DES', 'RC4', 'RC4Drop', 'Rabbit', 'RabbitLegacy', 'TripleDES']
    }
  },
  computed: {
    ...mapState('crypto/encrypt', ['beforeCoding', 'afterCoding', 'mode', 'secret'])
  },
  mounted() {
    this.select = new this.$Select(this.$refs.select)
  },
  methods: {
    ...mapActions('crypto/encrypt', ['acUpdateBeforeCoding', 'acUpdateAfterCoding', 'acUpdateMode', 'acUpdateSecret']),
    // 加密
    encrypt() {
      try {
        const afterCoding = Crypto[this.mode].encrypt(this.beforeCoding, this.secret).toString()
        this.acUpdateAfterCoding(afterCoding)
      } catch {
        this.$snackbar('加密失败')
      }
    },
    // 解密
    decrypt() {
      const bytes = Crypto[this.mode].decrypt(this.afterCoding, this.secret)
      if (bytes.sigBytes >= 0) {
        const beforeCoding = Crypto.enc.Utf8.stringify(bytes)
        this.acUpdateBeforeCoding(beforeCoding)
      } else {
        this.$snackbar('解密失败，信息有误')
      }
    }
  }
}
</script>
