import React, { FC, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

type CopyButtonProps = {
  // 需要复制的文本
  text: string;
};

const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <CopyToClipboard text={text} onCopy={copyText}>
        <button className="warn">复制结果</button>
      </CopyToClipboard>
      {copied ? <span style={{ color: '#52c41a' }}>已复制</span> : null}
    </>
  );
};

export default CopyButton;
