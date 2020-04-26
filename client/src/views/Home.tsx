import React, { FC } from 'react';
import { ExtRouteProps, routes } from '../routes';
import { Link } from 'react-router-dom';

const getList = () => {
  const list: { name: string, children: ExtRouteProps[] }[] = [];
  routes.slice(1).forEach(route => {
    const name = route.category;
    const obj = list.find(i => i.name === name);
    obj ? obj.children.push(route) : list.push({ name, children: [route] });
  });
  return list;
};

const Home: FC = () => {
  const list = getList();

  return (
    <div id="home">
      {list.map(i => {
        return (
          <div key={i.name} className="card">
            <div className="title">{i.name}</div>
            <div className="content">
              {i.children.map(route => <Link key={route.path as string} to={route.path as string}>{route.title}</Link>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
