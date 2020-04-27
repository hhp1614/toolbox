// base64编码字符集
const base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// base64解码字符集
const base64DecodeChars = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
];

/**
 * Base64 编码
 * @param value 需要编码的字符串
 */
export function base64Encode(value: string) {
  const length = value.length;
  let result = '';
  let i = 0;
  let c1: number, c2: number, c3: number;

  while (i < length) {
    c1 = value.charCodeAt(i++) & 0xff;
    if (i === length) {
      result += base64EncodeChars.charAt(c1 >> 2);
      result += base64EncodeChars.charAt((c1 & 0x3) << 4);
      result += '==';
      break;
    }
    c2 = value.charCodeAt(i++);
    if (i === length) {
      result += base64EncodeChars.charAt(c1 >> 2);
      result += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
      result += base64EncodeChars.charAt((c2 & 0xF) << 2);
      result += '=';
      break;
    }
    c3 = value.charCodeAt(i++);
    result += base64EncodeChars.charAt(c1 >> 2);
    result += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
    result += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
    result += base64EncodeChars.charAt(c3 & 0x3F);
  }

  return result;
}

/**
 * Base64 解码
 * @param value 需要解码的字符串
 */
export function base64Decode(value: string) {
  const length = value.length;
  let result = '';
  let i = 0;
  let c1: number, c2: number, c3: number, c4: number;

  while (i < length) {
    /* c1 */
    do {
      c1 = base64DecodeChars[value.charCodeAt(i++) & 0xFF];
    } while (i < length && c1 === -1);
    if (c1 === -1) break;

    /* c2 */
    do {
      c2 = base64DecodeChars[value.charCodeAt(i++) & 0xFF];
    } while (i < length && c2 === -1);
    if (c2 === -1) break;

    result += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

    /* c3 */
    do {
      c3 = value.charCodeAt(i++) & 0xFF;
      if (c3 === 61) return result;
      c3 = base64DecodeChars[c3];
    } while (i < length && c3 === -1);
    if (c3 === -1) break;

    result += String.fromCharCode(((c2 & 0xF) << 4) | ((c3 & 0x3C) >> 2));

    /* c4 */
    do {
      c4 = value.charCodeAt(i++) & 0xFF;
      if (c4 === 61) return result;
      c4 = base64DecodeChars[c4];
    } while (i < length && c4 === -1);
    if (c4 === -1) break;

    result += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }

  return result;
}
