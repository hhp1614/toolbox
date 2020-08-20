import { round } from '@hhp1614/utils/lib/common/math'

export default {
  install(Vue) {
    // 文件大小单位
    Vue.filter('fileSize', size => {
      const B = 1
      const KB = B << 10
      const MB = KB << 10
      const GB = MB << 10
      if (size < MB) {
        return round(size / KB, 2) + 'KB'
      } else if (size < GB) {
        return round(size / MB, 2) + 'MB'
      } else {
        return round(size / GB, 2) + 'GB'
      }
    })
  }
}
