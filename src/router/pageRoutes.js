/**
 * 导航配置
 */
export const pages = [
  {
    type: '/format',
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
  }
];

const routes = [];
pages.forEach(i => {
  i.children.forEach(j => {
    routes.push({
      path: `${i.type}/${j.type}`,
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
