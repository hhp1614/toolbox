import { RouteProps } from 'react-router-dom';
import { Base64, Home, Json, Unicode, Url } from '../views';

export interface ExtRouteProps extends RouteProps {
  category: string;
  title: string;
}

export const routes: ExtRouteProps[] = [
  { path: '/', component: Home, category: '', title: '' },
  { path: '/format/json', component: Json, category: '格式化', title: 'JSON 格式化' },
  { path: '/codec/url', component: Url, category: '编码解码', title: 'URL' },
  { path: '/codec/unicode', component: Unicode, category: '编码解码', title: 'Unicode' },
  { path: '/codec/base64', component: Base64, category: '编码解码', title: 'Base64' }
];

