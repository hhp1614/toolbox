import { createHash } from 'crypto';

/**
 * MD5 计算
 * @param content 计算内容
 */
export function md5(content: string) {
  const hash = createHash('md5');
  hash.update(content);
  return hash.digest('hex');
}
