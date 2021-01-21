<template>
  <div id="dialog-notify" class="mdui-dialog">
    <div class="mdui-dialog-title">周报/日报提醒</div>
    <div class="mdui-dialog-content">
      <div>
        <mdui-switch
          label="开关"
          :checked="notify.enable"
          @change="acUpdateNotify({ enable: !notify.enable })"
        />
      </div>
      <div>
        <mdui-checkbox
          v-for="i in 7"
          :key="i"
          :label="i | weekText"
          :value="i"
          :checked="notify.week"
          @change="updateWeek"
        />
      </div>
      <div class="flex">
        <div class="mdui-textfield flex-item">
          <label class="mdui-textfield-label">时</label>
          <input
            class="mdui-textfield-input"
            type="number"
            :value="notify.hour"
            @blur="updateHour"
          />
        </div>
        <div class="mdui-textfield flex-item">
          <label class="mdui-textfield-label">分</label>
          <input
            class="mdui-textfield-input"
            type="number"
            :value="notify.minute"
            @blur="updateMinute"
          />
        </div>
        <div class="mdui-textfield flex-item">
          <label class="mdui-textfield-label">秒</label>
          <input
            class="mdui-textfield-input"
            type="number"
            :value="notify.second"
            @blur="updateSecond"
          />
        </div>
      </div>
      <div class="mdui-textfield">
        <label class="mdui-textfield-label">提示内容</label>
        <textarea
          class="mdui-textfield-input"
          :value="notify.text"
          @input="updateText"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { AppNotification } from '@/utils/appNotification'

export default {
  name: 'DialogNotify',
  data() {
    return {
      // 通知对象
      notification: null
    }
  },
  computed: {
    ...mapState(['notify'])
  },
  filters: {
    weekText(i) {
      return '星期' + '.一二三四五六日'[i]
    }
  },
  created() {
    // 初始化通知对象
    this.notification = new AppNotification()
    // 请求通知权限
    this.notification.requestPermission()

    this.browserNotify()
  },
  methods: {
    ...mapActions(['acUpdateNotify']),
    // 事件：更新星期
    updateWeek(week) {
      this.acUpdateNotify({ week })
    },
    // 事件：更新时钟
    updateHour(e) {
      let hour = +e.target.value
      hour > 23 && (hour = 23)
      hour < 0 && (hour = 0)
      this.acUpdateNotify({ hour })
    },
    // 事件：更新分钟
    updateMinute(e) {
      let minute = +e.target.value
      minute > 59 && (minute = 59)
      minute < 0 && (minute = 0)
      this.acUpdateNotify({ minute })
    },
    // 事件：更新秒钟
    updateSecond(e) {
      let second = +e.target.value
      second > 59 && (second = 59)
      second < 0 && (second = 0)
      this.acUpdateNotify({ second })
    },
    // 事件：更新提示文本
    updateText(e) {
      this.acUpdateNotify({ text: e.target.value })
    },
    // 每秒轮询是否通知
    browserNotify() {
      setInterval(() => {
        const date = new Date()
        const day = date.getDay()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        const condition =
          this.notify.enable &&
          this.notify.week.includes(day) &&
          hour === this.notify.hour &&
          minute === this.notify.minute &&
          second === this.notify.second
        if (condition) {
          this.notification.openNotification('通知', {
            body: this.notify.text,
            icon: './avatar.png',
            requireInteraction: true
          })
        }
      }, 1000)
    }
  }
}
</script>
