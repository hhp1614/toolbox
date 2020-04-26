/**
 * unicode 编码
 * @param value 需要要转码的字符串
 */
export function unicodeEncode(value: string) {
  const result: string[] = [];
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i).toString(16);
    result.push('\\u' + code.slice(-4).padStart(4, '0'));
  }
  return result.join('');
}

/**
 * unicode 解码
 * @param value 需要要解码的字符串
 */
export function unicodeDecode(value: string) {
  return value.replace(/(\\)?\\u/g, '\\u').replace(/\\u[0-9a-f]{4}/gi, match => {
    const code = Number('0x' + match.substring(2));
    return String.fromCodePoint(code);
  });
}
