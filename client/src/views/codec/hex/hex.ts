function utf8encode(str: string, isGetBytes: boolean) {
  const back = [];
  let byteSize = 0;

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (0x00 <= code && code <= 0x7f) {
      byteSize += 1;
      back.push(code);
    } else if (0x80 <= code && code <= 0x7ff) {
      byteSize += 2;
      back.push((192 | (31 & (code >> 6))));
      back.push((128 | (63 & code)));
    } else if ((0x800 <= code && code <= 0xd7ff)
      || (0xe000 <= code && code <= 0xffff)) {
      byteSize += 3;
      back.push((224 | (15 & (code >> 12))));
      back.push((128 | (63 & (code >> 6))));
      back.push((128 | (63 & code)));
    }
  }

  for (let i = 0; i < back.length; i++) {
    back[i] &= 0xff;
  }

  if (isGetBytes) return back;

  if (byteSize <= 0xff) return [0, byteSize].concat(back);
  else return [byteSize >> 8, byteSize & 0xff].concat(back);
}

function utf8decode(arr: number[]) {
  let utf = '';

  for (let i = 0; i < arr.length; i++) {
    const one = arr[i].toString(2);
    const v = one.match(/^1+?(?=0)/);

    if (v && one.length === 8) {
      let bytesLength = v[0].length;
      let store = arr[i].toString(2).slice(7 - bytesLength);

      for (let st = 1; st < bytesLength; st++) {
        store += arr[st + i].toString(2).slice(2);
      }

      utf += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      utf += String.fromCharCode(arr[i]);
    }
  }

  return utf;
}

/**
 * 十六进制编码
 * @param value 需要编码的字符串
 */
export function hexEncode(value: string) {
  const charBuf = utf8encode(value, true);
  let result = '';

  for (let i = 0; i < charBuf.length; i++) {
    let x = (charBuf[i] & 0xFF).toString(16);
    if (x.length === 1) {
      x = '0' + x;
    }
    result += x;
  }

  return result;
}

/**
 * 十六进制解码
 * @param value 需要解码的字符串
 */
export function hexDecode(value: string) {
  const buf = [];

  for (let i = 0; i < value.length; i += 2) {
    buf.push(parseInt(value.substring(i, i + 2), 16));
  }

  return utf8decode(buf);
}
