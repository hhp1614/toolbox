/**
 * 导航配置
 */
export const pages = [
  {
    type: 'format',
    icon: 'code',
    title: '代码格式',
    children: [
      {
        type: 'json',
        title: 'JSON',
        subtitle: '格式化 / 排序',
        component: () => import('../views/format/FormatJson')
      }
    ]
  },
  {
    type: 'crypto',
    icon: 'lock',
    title: '编码加密',
    children: [
      {
        type: 'urlcode',
        title: 'URL 编码',
        subtitle: '编码 / 解码',
        component: () => import('../views/crypto/Urlcode')
      },
      {
        type: 'unicode',
        title: 'Unicode',
        subtitle: 'HTML 字符实体编码',
        component: () => import('../views/crypto/Unicode')
      },
      {
        type: 'base64',
        title: 'Base64',
        subtitle: '编码 / 解码',
        component: () => import('../views/crypto/Base64')
      },
      {
        type: 'hash',
        title: '哈希',
        subtitle: 'MD5 / SHA ...',
        component: () => import('../views/crypto/Hash')
      },
      {
        type: 'encrypt',
        title: '加密',
        subtitle: 'AES / DES / RC4 ...',
        component: () => import('../views/crypto/Encrypt')
      }
    ]
  }
];

// 路由表扁平化
const routes = [];
pages.forEach(i => {
  i.children.forEach(j => {
    routes.push({
      path: `/${i.type}/${j.type}`,
      component: j.component,
      name: j.type,
      meta: {
        title: j.title,
        subtitle: j.subtitle
      }
    });
  });
});

/**
 * 导航路由
 */
export const pageRoutes = routes;
