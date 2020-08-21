import Editor from '@/components/global/Editor'
import CopyBtn from '@/components/global/CopyBtn'
import MduiBtn from '@/components/global/MduiBtn'
import MduiIcon from '@/components/global/MduiIcon'
import MduiCheckbox from '@/components/global/MduiCheckbox'
import ActionBar from '@/components/global/ActionBar'
import PasteImage from '@/components/global/PasteImage'

/**
 * 全局组件
 */
export default {
  install(Vue) {
    Vue.component('Editor', Editor)
    Vue.component('CopyBtn', CopyBtn)
    Vue.component('MduiBtn', MduiBtn)
    Vue.component('MduiIcon', MduiIcon)
    Vue.component('MduiCheckbox', MduiCheckbox)
    Vue.component('ActionBar', ActionBar)
    Vue.component('PasteImage', PasteImage)
  }
}
