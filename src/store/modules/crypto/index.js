import urlcode from './urlcode';
import unicode from './unicode';
import base64 from './base64';
import hash from './hash';
import encrypt from './encrypt';

export default {
  namespaced: true,
  modules: { urlcode, unicode, base64, hash, encrypt }
};
