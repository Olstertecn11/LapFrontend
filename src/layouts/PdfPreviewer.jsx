

const PdfPreviewer = ({ pdf }) => {
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };



  return (
    <div>
      {
        pdf && (
          <iframe src={`data:application/pdf;base64,${arrayBufferToBase64(pdf.contenido.data)}`} width="100%" height="480vh" />
        )
      }
    </div>
  )
};



export default PdfPreviewer;
