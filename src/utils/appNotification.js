export class AppNotification {
  constructor() {
    // 浏览器是否支持 Notification API
    this.isNotificationSupported = 'Notification' in window
    // 用户是否同意接受通知
    if (this.isNotificationSupported) {
      this.isPermissionGranted = Notification.permission === 'granted'
    }
  }

  // 请求开启系统通知功能
  async requestPermission() {
    if (!this.isNotificationSupported) {
      throw '当前浏览器不支持 Notification API'
    }
    const permission = await Notification.requestPermission()
    if (permission === 'granted') {
      this.isPermissionGranted = true
    }
  }

  // 打开系统通知功能（具体事件绑定由用户自定义）
  openNotification(title, options) {
    if (!this.isNotificationSupported) {
      throw '当前浏览器不支持 Notification API'
    }
    if (!this.isPermissionGranted) {
      throw '当前页面通知未开启'
    }
    return new Notification(title, options)
  }
}
