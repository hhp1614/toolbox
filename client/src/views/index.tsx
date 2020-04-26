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

// Unicode 编码解码
export const Base64 = loadable(() => import('./codec/base64'), options);
