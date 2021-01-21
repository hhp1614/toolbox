<template>
  <div class="mdui-row">
    <div class="mdui-chip">
      <span class="mdui-chip-icon mdui-color-amber-accent">
        <mdui-icon type="info" />
      </span>
      <span class="mdui-chip-title">哈希计算是不可逆的</span>
    </div>
    <editor
      class="line-5"
      label="明文"
      :value="beforeCoding"
      @input="acUpdateBeforeCoding"
    />
    <editor
      v-if="useSecret"
      class="line-1"
      label="秘钥"
      :value="secret"
      @input="acUpdateSecret"
    />
    <action-bar>
      <mdui-btn
        class="mdui-m-r-2"
        color="theme-accent"
        @click="compute"
        raised
        ripple
      >
        <mdui-icon type="keyboard_arrow_down" />计算
      </mdui-btn>
      <select
        ref="select"
        :value="mode"
        class="mdui-select"
        @change="acUpdateMode($event.target.value)"
        mdui-select
      >
        <option v-for="(item, index) in modeList" :key="index" :value="item">{{
          item
        }}</option>
      </select>
      <mdui-checkbox
        label="Hmac"
        :checked="useSecret"
        @change="acUpdateUseSecret"
      />
    </action-bar>
    <editor
      class="line-5"
      label="哈希码"
      :value="afterCoding"
      :line-numbers="false"
      @input="acUpdateAfterCoding"
      read-only
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Crypto from 'crypto-js'

export default {
  name: 'Hash',
  data() {
    return {
      select: null,
      modeList: [
        'MD5',
        'SHA1',
        'SHA256',
        'SHA224',
        'SHA512',
        'SHA384',
        'SHA3',
        'RIPEMD160'
      ]
    }
  },
  computed: {
    ...mapState('crypto/hash', [
      'beforeCoding',
      'afterCoding',
      'mode',
      'useSecret',
      'secret'
    ])
  },
  mounted() {
    this.select = new this.$Select(this.$refs.select)
  },
  methods: {
    ...mapActions('crypto/hash', [
      'acUpdateBeforeCoding',
      'acUpdateAfterCoding',
      'acUpdateMode',
      'acUpdateUseSecret',
      'acUpdateSecret'
    ]),
    // 事件：计算
    compute() {
      try {
        const hmac = this.useSecret ? 'Hmac' : ''
        const secret = this.useSecret ? this.secret : undefined
        const hash = Crypto[hmac + this.mode](
          this.beforeCoding,
          secret
        ).toString()
        this.acUpdateAfterCoding(hash)
      } catch {
        this.$snackbar('计算失败')
      }
    }
  }
}
</script>
