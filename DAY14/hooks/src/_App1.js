import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {
  const [sayi1,setSayi1]=useState(0);

  const [sayi2,setSayi2]=useState(0);
  const kontrol=()=>{
    setSayi1(Number(prompt("Sayi gir")));
    setSayi2(Number(prompt("Sayi gir")));
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <button onClick={kontrol}>Merhaba</button>
        <h4>Sayinin Toplamlari:{sayi1+sayi2}</h4>
      </header>
    </div>
  );
}

export default App;