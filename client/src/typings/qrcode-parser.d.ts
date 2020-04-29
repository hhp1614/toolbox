declare module 'qrcode-parser' {
  function QRCodeParser(input: File | string): Promise<{ data: string }>;

  export = QRCodeParser;
}
