import React, { FC, useState } from 'react';
import CopyButton from '../../../components/CopyButton';
import { utf8Decode, utf8Encode } from '../utf8/utf8';
import { base64Decode, base64Encode } from './base64';

const Base64: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(base64Encode(utf8Encode(sourceValue)));

  const decode = () => setOutputValue(utf8Decode(base64Decode(sourceValue)));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="base64">
      <div className="title">Base64 编码解码</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要 Base64 编码或解码的字符串"
        />
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
