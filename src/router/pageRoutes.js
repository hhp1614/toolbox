import FormatJson from '../views/format/FormatJson';

/**
 * 导航配置
 */
export const pages = [
  {
    type: '/format',
    icon: 'mdi-code-tags',
    title: '代码格式',
    children: [{ type: 'json', title: 'JSON', subtitle: '格式化', component: FormatJson }]
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
        title: j.title
      }
    });
  });
});

/**
 * 导航路由
 */
export const pageRoutes = routes;
