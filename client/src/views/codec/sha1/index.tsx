import React, { FC, useState } from 'react';
import sha1 from 'sha1';
import CopyButton from '../../../components/CopyButton';

const Sha1: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(sha1(sourceValue));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="sha1">
      <div className="title">SHA-1 计算</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要 SHA-1 计算的字符串"
        />
      </div>
      <div className="action">
        <button className="primary" onClick={encode}>计算</button>
        <button className="error" onClick={clearSourceValue}>清空</button>
        <CopyButton text={outputValue} />
      </div>
      <div className="output">
        <textarea value={outputValue} readOnly />
      </div>
    </div>
  );
};

export default Sha1;
