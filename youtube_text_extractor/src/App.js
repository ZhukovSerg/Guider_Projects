import React, { useState } from'react';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [extractedText, setExtractedText] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправляем запрос на бэкенд с ссылкой на видео
    fetch('http://localhost:5000/api/extract-text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl }),
      mode: 'cors',
    })
     .then((response) => response.json())
     .then((data) => {
        setExtractedText(data.extractedText);
      })
     .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Извлечение текста из видео</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          placeholder="Введите ссылку на видео"
        />
        <button type="submit">Извлечь текст</button>
      </form>
      {extractedText && <p>{extractedText}</p>}
    </div>
  );
}

export default App;
