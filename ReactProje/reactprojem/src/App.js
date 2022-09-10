import logo from './logo.svg';
import './App.css';
import Selamla from './components/Selamla'

function App()
 {
    return
     ( < div className = "App" > 
        <Selamla bugun = "Bugün günlerde pazartesi" / >
        <Selamla veda = "seni sitemizde görmek güzel" / >
        </div >
    );
}

export default App;