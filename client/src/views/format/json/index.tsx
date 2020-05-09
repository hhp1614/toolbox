import React, { FC, useRef, useState } from 'react';
import ReactJson from 'react-json-view';
import { unicodeDecode } from '../../codec/unicode/unicode';

type List = {
  id: number;
  source: string;
  isActive: boolean;
}[];

const Index: FC = () => {
  const [list, setList] = useState<List>([{ id: 0, source: '', isActive: true }]);
  const [sourceValue, setSourceValue] = useState('');
  const sourceRef = useRef<HTMLTextAreaElement>({} as HTMLTextAreaElement);

  const changeTab = (id: number) => {
    list.forEach(i => {
      i.isActive = i.id === id;
      if (i.isActive) {
        setSourceValue(i.source);
      }
    });
    setList([...list]);
  };

  const addTab = () => {
    list.forEach(i => i.isActive = false);
    list.push({ id: list.length, source: '', isActive: true });
    setList([...list]);
    setSourceValue('');
  };

  const handleInput = () => {
    const value = sourceRef.current.value;
    list.forEach(i => i.isActive && (i.source = value));
    setList([...list]);
    setSourceValue(value);
    sourceRef.current.style.height = 2 + sourceRef.current.scrollHeight + 'px';
  };

  const setOutputValue = (source: string) => {
    if (source.trim() === '') return {};
    const errJson = { ERROR: '不是有效的 JSON 对象' };
    try {
      const res = JSON.parse(unicodeDecode(source));
      const t = typeof res;
      return (t != null && t === 'object') ? res : errJson;
    } catch {
      return errJson;
    }
  };

  const clearSourceValue = () => {
    list.forEach(i => i.isActive && (i.source = ''));
    setList([...list]);
    setSourceValue('');
    sourceRef.current.style.height = 498 + 'px';
  };

  return (
    <div id="json">
      <div className="title">JSON 格式化</div>
      <div className="tab">
        {list.map(i =>
          <div key={i.id} className={`item ${i.isActive ? 'active' : ''}`} onClick={() => changeTab(i.id)}>
            tab-{i.id}
          </div>
        )}
        <div className="item" onClick={addTab}>+</div>
        <button className="error" onClick={clearSourceValue}>清空</button>
      </div>
      <div className="content">
        <textarea
          className="source"
          ref={sourceRef}
          onChange={handleInput}
          value={sourceValue}
          placeholder="输入需要格式化的 JSON"
        />
        <div className="output">
          <ReactJson src={setOutputValue(sourceValue)} name={false} />
        </div>
      </div>
    </div>
  );
};

export default Index;
