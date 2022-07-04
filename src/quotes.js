import React, { useEffect, useState } from 'react';

const Discription = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const quotes = setTimeout(() => {
      fetch('https://type.fit/api/quotes')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setText(data[Math.floor(Math.random() * data.length)].text);
          setAuthor(data[Math.floor(Math.random() * data.length)].author);
        });
    }, 10000);
    return () => clearTimeout(quotes);
  });

  if (author === '' && text) {
    setAuthor('unknown author');
  }

  return (
    <div className="discription">
      <section className="sections">
        <div className="text">{text}</div>
        <h2 className="author">{author}</h2>
      </section>
    </div>
  );
};

export default Discription;
