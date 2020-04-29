import React, { FC, useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import QRCodeParser from 'qrcode-parser';
import { getImageFromClipboard, getImageUrl } from './helper';
import { Log } from '../../../utils/log';
import CopyButton from '../../../components/CopyButton';

const QrCode: FC = () => {
  const [sourceUrl, setSourceUrl] = useState('');
  const [outputUrl, setOutputUrl] = useState('');
  const [sourceImage, setSourceImage] = useState('');
  const [sourceImageFocus, setSourceImageFocus] = useState(false);

  const fileRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  const imageRef = useRef<HTMLImageElement>({} as HTMLImageElement);

  // 选择图片
  const selectImage = () => {
    const file = fileRef.current.files![0];
    generate(file).catch(e => Log.error(e));
  };

  const pasteImage = (e: React.ClipboardEvent<HTMLDivElement>) => {
    // 从剪贴板获取文本
    const text = e.clipboardData.getData('text/plain');
    if (text) {
      setSourceImage(text);
      QRCodeParser(text).then(result => setOutputUrl(result.data)).catch(e => Log.error(e));
      return;
    }
    // 从剪贴板获取文件
    const file = getImageFromClipboard(e.clipboardData.items);
    file && generate(file).catch(e => Log.error(e));
  };

  // 生成二维码
  const generate = async (file: File) => {
    const url = await getImageUrl(file);
    setSourceImage(url);
    const result = await QRCodeParser(file);
    setOutputUrl(result.data);
  };

  const clearDecode = () => {
    setSourceImage('');
    setOutputUrl('');
  };

  return (
    <div id="qrCode">
      <div className="title">二维码编码</div>
      <div className="encode">
        <div className="source">
          <textarea
            value={sourceUrl}
            onChange={e => setSourceUrl(e.target.value)}
            placeholder="输入需要转成二维码的字符串"
          />
        </div>
        <div className="output">
          <QRCode value={sourceUrl} />
        </div>
      </div>

      <div className="title">二维码解码</div>
      <div className="decode">
        <div
          className={`source ${sourceImageFocus ? 'active' : ''}`}
          tabIndex={-1}
          onFocus={() => setSourceImageFocus(true)}
          onBlur={() => setSourceImageFocus(false)}
          onPaste={pasteImage}
        >
          {sourceImage ? (
            <img
              ref={imageRef}
              src={sourceImage}
              onError={() => setSourceImage('')}
              alt="二维码"
              crossOrigin="anonymous"
            />
          ) : (
            '支持直接粘贴图片'
          )}
        </div>
        <div className="output">
          <textarea value={outputUrl} readOnly />
        </div>
      </div>
      <div className="action">
        <label htmlFor="selectImage" className="btn primary">选择图片</label>
        <input ref={fileRef} id="selectImage" type="file" accept="image/png" onChange={selectImage} hidden />
        <button className="error" onClick={clearDecode}>清空</button>
        <CopyButton text={outputUrl} />
      </div>
    </div>
  );
};

export default QrCode;
