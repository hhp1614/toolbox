import React, { FC, useState } from 'react';
import CopyButton from '../../../components/CopyButton';
import { utf16To8, utf8To16 } from './utf16';

const Utf16: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(utf8To16(encodeURIComponent(sourceValue)));

  const decode = () => setOutputValue(decodeURIComponent(utf16To8(sourceValue)));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="utf16">
      <div className="title">UTF-16 编码解码</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要十六进制编码或解码的字符串"
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

export default Utf16;
