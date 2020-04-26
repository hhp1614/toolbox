enum LogColor {
  primary = '#1890ff',
  warning = '#faad14',
  success = '#52c41a',
  error = '#f5222d'
}

function getStyle(color: string) {
  return `color: ${color};padding: 0 4px;border-radius: 4px;`;
}

/**
 * 打印类
 */
export class Log {
  /**
   * 打印信息
   * @param args 参数
   */
  static info(...args: any[]) {
    console.log('%c%s', getStyle(LogColor.primary), '[info]', ...args);
  }

  /**
   * 打印警告信息
   * @param args 参数
   */
  static warn(...args: any[]) {
    console.log('%c%s', getStyle(LogColor.warning), '[warn]', ...args);
  }

  /**
   * 打印成功信息
   * @param args 参数
   */
  static success(...args: any[]) {
    console.log('%c%s', getStyle(LogColor.success), '[success]', ...args);
  }

  /**
   * 打印错误信息
   * @param args 参数
   */
  static error(...args: any[]) {
    console.log('%c%s', getStyle(LogColor.error), '[error]', ...args);
  }
}
