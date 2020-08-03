import mdui from 'mdui';
import { each } from '@hhp1614/utils/lib/common/collection';

const map = {
  /**
   * 根据 HTML 字符串或 CSS 选择器创建 JQ 对象
   */
  $$: mdui.$,
  /**
   * Drawer 组件
   * @description 请通过 new this.$Drawer() 调用
   * @type {mdui.Drawer}
   */
  $Drawer: mdui.Drawer,
  /**
   * 折叠内容块组件
   * @description 请通过 new this.$Collapse() 调用
   * @type {mdui.Collapse}
   */
  $Collapse: mdui.Collapse,
  /**
   * Tooltip 组件
   * @description 请通过 new this.$Tooltip() 调用
   * @type {mdui.Tooltip}
   */
  $Tooltip: mdui.Tooltip,
  /**
   * 下拉选择组件
   * @description 请通过 `new this.$Select()` 调用
   * @type mdui.Select
   */
  $Select: mdui.Select,
  /**
   * 打开一个 Snackbar
   * @typeof {mdui.snackbar}
   */
  $snackbar: mdui.snackbar
};

/**
 * MDUI 全局类或方法
 */
export default {
  install(Vue) {
    const proto = {};
    each(map, (value, key) => {
      proto[key] = { value };
    });
    Object.defineProperties(Vue.prototype, proto);
  }
};
