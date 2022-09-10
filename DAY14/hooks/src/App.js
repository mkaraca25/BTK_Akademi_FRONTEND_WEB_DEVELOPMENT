import React ,{useState , useEffect} from 'react';




function App() {
  const [sayi1 , setSayi1] = useState(0);
  const [sayi2 , setSayi2] = useState(0);
 
  const [toplam , setToplam] = useState(0);
  const [cikar, setCikar] = useState(0);


  useEffect(()=>{
    setToplam(Number(sayi1)+Number(sayi2))
    setCikar(Number(sayi1)-Number(sayi2))

  },[sayi1,sayi2])
  


  return (
    <div>
      <input value={sayi1} onChange={e=>setSayi1(e.target.value)} />
      <input value={sayi2} onChange={e=>setSayi2(e.target.value)} />
      <button onClick={()=>setToplam(Number(sayi1)+Number(sayi2))}>Toplam </button>
      <br/>
      Toplam: {toplam}
      <div>
      <div>
      <input value={sayi1} onChange={e=>setSayi1(e.target.value)} />
      <input value={sayi2} onChange={e=>setSayi2(e.target.value)} />
      <button onClick={()=>setCikar(Number(sayi1)-Number(sayi2))}>Çıkar </button>
      <br/>
      Cikar: {cikar}
    </div>
      </div>
    </div>
  )
}

export default App