/**
 * UTF-8 编码
 * @param value 需要编码的字符串
 */
export function utf8Encode(value: string) {
  const length = value.length;
  let result = '';
  let c: number;

  for (let i = 0; i < length; i++) {
    c = value.charCodeAt(i);
    if (c >= 0x0001 && c <= 0x007f) {
      result += value.charAt(i);
    } else if (c > 0x07ff) {
      result += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
      result += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
      result += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    } else {
      result += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
      result += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
    }
  }

  return result;
}

/**
 * UTF-8 解码
 * @param value 需要解码的字符串
 */
export function utf8Decode(value: string) {
  const length = value.length;
  let result = '';
  let i = 0;
  let c: number;
  let char2: number, char3: number;

  while (i < length) {
    c = value.charCodeAt(i++);
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        result += value.charAt(i - 1);
        break;
      case 12:
      case 13:
        // 110x xxxx  10xx xxxx
        char2 = value.charCodeAt(i++);
        result += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = value.charCodeAt(i++);
        char3 = value.charCodeAt(i++);
        result += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0));
        break;
    }
  }

  return result;
}
