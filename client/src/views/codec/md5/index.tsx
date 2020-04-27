import React, { FC, useState } from 'react';
import CopyButton from '../../../components/CopyButton';
import { md5 } from './md5';

const Md5: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(md5(sourceValue));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="md5">
      <div className="title">MD5 计算</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要进行 MD5 计算的字符串"
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

export default Md5;
