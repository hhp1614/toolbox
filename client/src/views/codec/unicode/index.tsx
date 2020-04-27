import React, { FC, useState } from 'react';
import { unicodeDecode, unicodeEncode } from './unicode';
import CopyButton from '../../../components/CopyButton';

const Unicode: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(unicodeEncode(sourceValue));

  const decode = () => setOutputValue(unicodeDecode(sourceValue));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="unicode">
      <div className="title">Unicode 编码解码</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要 URI 编码或解码的字符串"
        />
      </div>
      <div className="action">
        <button className="primary" onClick={encode}>编码</button>
        <button className="success" onClick={decode}>解码</button>
        <button className="error" onClick={clearSourceValue}>清空</button>
        <CopyButton text={outputValue} />
      </div>
      <div className="output">
        <textarea value={outputValue} onMouseEnter={() => {
        }} readOnly />
      </div>
    </div>
  );
};

export default Unicode;
