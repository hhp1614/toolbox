/**
 * UTF-16 转 UTF-8
 * @param value
 */
export function utf16To8(value: string) {
  return value.replace(/\\x/g, '%');
}

/**
 * UTF-8 转 UTF-16
 * @param value
 */
export function utf8To16(value: string) {
  return value.replace(/%/g, '\\x');
}
