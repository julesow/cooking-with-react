import React ,{useState,createContext} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';


export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('red');

  return (
    <ThemeContext.Provider value ={{backgroundColor:theme}}>
      
        <Counter initialCount={100} />
        <hr />
        <CounterHooks initialCount={13} />
      
      <button 
      onClick={()=> setTheme(prevTheme =>
       { return prevTheme === 'red'? 'blue':'red'} )} > Toggle
        </button>
       
    </ThemeContext.Provider>
  );
}

export default App;
