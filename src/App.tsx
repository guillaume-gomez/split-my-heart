import React from 'react';
import './App.css';

import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-5 items-center">
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
