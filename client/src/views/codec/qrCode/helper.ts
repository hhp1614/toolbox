/**
 * 获取图片地址
 * @param file 图片文件对象
 */
export function getImageUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => resolve(e.target!.result as string);
    reader.onerror = e => reject(e);
  });
}

/**
 * 从剪贴板获取图片
 * @param items
 */
export function getImageFromClipboard(items: DataTransferItemList) {
  if (!items || !items.length) {
    return;
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
      return items[i].getAsFile()!;
    }
  }
}
