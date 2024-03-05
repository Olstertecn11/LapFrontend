import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const ClassFolder = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfList, setPdfList] = useState([]);


  const getPDF = () => {
    fetch('http://localhost:3000/pdfs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPdfList(data);
      })
      .catch(error => {
        console.error('Error al obtener los archivos PDF:', error);
      });
  }

  useEffect(() => {
    getPDF();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data);
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  };

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
    <div className="container p-4">
      <div className="row">
        <div className="col-md-5 mx-auto">
          {pdfList.length > 0 && (
            <iframe src={`data:application/pdf;base64,${arrayBufferToBase64(pdfList[0].contenido.data)}`} width="100%" height="500px" />
          )}
          {
            pdfList.map((item, index) => (
              <li key={item.nombre + index}>{item.nombre}</li>
            ))
          }
        </div>
        <div className="col-md-5 mx-auto">
          <h1>Subir PDF</h1>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} accept=".pdf" />
            <button type="submit">Subir PDF</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default ClassFolder
