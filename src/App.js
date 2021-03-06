import { useEffect, useState } from 'react';
import './App.css';
import TakeN from './TakeN';
import { createBrowserHistory } from "history";
import qs from 'qs';
import Maze from './Maze';
function App() {
  const history = createBrowserHistory();
  const [n, setN] = useState(null);

  useEffect(()=>{
    let temp = qs.parse(history.location.search.substr(1)).count;
    console.log('temp ',temp);
    if(temp === null || isNaN(parseInt(temp)) || temp <= 0) {
      setN(null);
      history.push(``);
    }
    else {
      setN(parseInt(temp));
    }
  },[]);


  function hello(rows) {
    if( rows === null || isNaN(parseInt(rows)) || rows <= 0) {
      setN(null);
      history.push(``);
    }
    else {
      setN(rows);
      history.push(`?count=${rows}`);
    }
  }

  return (
    <div className="app">
      <h1 className="heading"> Welcome to the Game! </h1>
      { n? <Maze n={n}/>: <TakeN demo={hello}/>}
    </div>
  );
}

export default App;
