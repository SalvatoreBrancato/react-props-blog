import { useState } from 'react'
import './App.css'
import TheHeader from './components/TheHeader';
import TheCard from './components/TheCard';
import TheFooter from './components/TheFooter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <TheHeader/>
        
        <TheCard/>
        
        <TheFooter/>
      </div>
    </>
  )
}

export default App
