import React, { FC, useState } from 'react';
import base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import CopyButton from '../../../components/CopyButton';

const Base64: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(base64.stringify(Utf8.parse(sourceValue)));

  const decode = () => setOutputValue(Utf8.stringify(base64.parse(sourceValue)));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="base64">
      <div className="title">Unicode 编码解码</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要 URI 编码或解码的字符串" />
      </div>
      <div className="action">
        <button className="primary" onClick={encode}>编码</button>
        <button className="success" onClick={decode}>解码</button>
        <button className="error" onClick={clearSourceValue}>清空</button>
        <CopyButton text={outputValue} />
      </div>
      <div className="output">
        <textarea value={outputValue} readOnly />
      </div>
    </div>
  );
};

export default Base64;
