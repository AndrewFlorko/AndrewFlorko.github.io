import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Андрей Флорко</h1>
        <p className="App-goal">
          <strong>Цель прохождения курса:</strong> систематизация знаний React, которые понадобятся в коммерческой
          разработке для нужд компании
        </p>
        <p className="App-tech">
          <strong>Технологии:</strong> Full Stack .NET разработчик (преимущественно Back-End)
        </p>
        <p className="App-experience">
          <strong>Опыт:</strong> 20 лет разработки
        </p>
      </header>
    </div>
  );
}

export default App;
