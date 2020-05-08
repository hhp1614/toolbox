import React, { FC, useState } from 'react';
import qs from 'qs';
import ReactJson from 'react-json-view';

const UrlParam: FC = () => {
  const [sourceValue, setSourceValue] = useState('');
  const [protocol, setProtocol] = useState('');
  const [hostname, setHostname] = useState('');
  const [pathname, setPathname] = useState('');
  const [params, setParams] = useState({});

  const parse = () => {
    try {
      const url = new URL(sourceValue);
      setProtocol(url.protocol);
      setHostname(url.hostname);
      setPathname(url.pathname.replace(/\/$/, ''));
      setParams(qs.parse(url.search.replace(/^\?/, '')));
    } catch {
      setParams(qs.parse(sourceValue.replace(/^\?/, '')));
    }
  };

  const clearSourceValue = () => {
    setSourceValue('');
  };

  return (
    <div id="urlParam">
      <div className="title">URL 参数解析</div>
      <div className="source">
        <textarea
          value={sourceValue}
          onChange={e => setSourceValue(e.target.value)}
          placeholder="输入需要进行 URL 参数解析的字符串"
        />
        <div className="action">
          <button className="primary" onClick={parse}>解析</button>
          <button className="error" onClick={clearSourceValue}>清空</button>
        </div>
      </div>
      <div className="output">
        <div className="item"><span>协议：</span>{protocol}</div>
        <div className="item"><span>域名：</span>{hostname}</div>
        <div className="item"><span>路径：</span>{pathname}</div>
        <div className="item">
          <span>参数：</span>
          <ReactJson src={params} name={false} />
        </div>
      </div>
    </div>
  );
};

export default UrlParam;
