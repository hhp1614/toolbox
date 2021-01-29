import json from './json';
import urlParse from './urlParse';
import html from './html';
import css from './css';

export default {
  namespaced: true,
  modules: { json, urlParse, html, css }
};
