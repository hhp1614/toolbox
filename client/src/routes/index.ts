import { RouteProps } from 'react-router-dom';
import { Base64, Hex, Home, Json, Md5, Sha1, Unicode, Url, Utf16, Utf8 } from '../views';

export interface ExtRouteProps extends RouteProps {
  category: string;
  title: string;
}

export const routes: ExtRouteProps[] = [
  { path: '/', component: Home, category: '', title: '' },
  { path: '/format/json', component: Json, category: '格式化', title: 'JSON 格式化' },
  { path: '/codec/url', component: Url, category: '编码解码', title: 'URL' },
  { path: '/codec/unicode', component: Unicode, category: '编码解码', title: 'Unicode' },
  { path: '/codec/base64', component: Base64, category: '编码解码', title: 'Base64' },
  { path: '/codec/utf8', component: Utf8, category: '编码解码', title: 'UTF-8' },
  { path: '/codec/utf16', component: Utf16, category: '编码解码', title: 'UTF-16' },
  { path: '/codec/hex', component: Hex, category: '编码解码', title: 'Hex' },
  { path: '/codec/md5', component: Md5, category: '编码解码', title: 'MD5' },
  { path: '/codec/sha1', component: Sha1, category: '编码解码', title: 'SHA-1' }
];

