import React from 'react';
import loadable, { Options } from '@loadable/component';
import Loading from '../components/Loading';

const options: Options<object> = { fallback: <Loading /> };

export const Home = loadable(() => import('../views/Home'), options);


// JSON 格式化
export const Json = loadable(() => import('./format/json'), options);

// URL 编码解码
export const Url = loadable(() => import('./codec/url'), options);
// Unicode 编码解码
export const Unicode = loadable(() => import('./codec/unicode'), options);
// Base64 编码解码
export const Base64 = loadable(() => import('./codec/base64'), options);
// UTF-8 编码解码
export const Utf8 = loadable(() => import('./codec/utf8'), options);
// Utf16 编码解码
export const Utf16 = loadable(() => import('./codec/utf16'), options);
// 二维码编码解码
export const QrCode = loadable(() => import('./codec/qrCode'), options);
// 十六进制编码解码
export const Hex = loadable(() => import('./codec/hex'), options);
// MD5 计算
export const Md5 = loadable(() => import('./codec/md5'), options);
// SHA-1 计算
export const Sha1 = loadable(() => import('./codec/sha1'), options);

// URL 参数解析
export const UrlParam = loadable(() => import('./parse/urlParam'), options);
