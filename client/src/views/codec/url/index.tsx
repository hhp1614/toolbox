import React, { FC, useState } from 'react';
import CopyButton from '../../../components/CopyButton';

const Index: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const encode = () => setOutputValue(encodeURIComponent(sourceValue));

  const decode = () => setOutputValue(decodeURIComponent(sourceValue));

  const urlEncode = () => setOutputValue(encodeURI(sourceValue));

  const urlDecode = () => setOutputValue(decodeURI(sourceValue));

  const clearSourceValue = () => {
    setSourceValue('');
    setOutputValue('');
  };

  return (
    <div id="url">
      <div className="title">URL 编码解码</div>
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
        <button className="primary" onClick={urlEncode} title="仅对 URL query 部分进行编码">完整 URL 编码</button>
        <button className="success" onClick={urlDecode} title="仅对 URL query 部分进行解码">完整 URL 解码</button>
        <button className="error" onClick={clearSourceValue}>清空</button>
        <CopyButton text={outputValue} />
      </div>
      <div className="output">
        <textarea value={outputValue} readOnly />
      </div>
    </div>
  );
};

export default Index;
