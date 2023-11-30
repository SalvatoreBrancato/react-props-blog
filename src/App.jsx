import './App.css'
import TheHeader from './components/TheHeader';
import TheCard from './components/TheCard';
import TheFooter from './components/TheFooter';
import TheListTags from './components/TheListTags';

function App() {

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <TheHeader/>

        <TheListTags/>
        
        <TheCard/>
        
        <TheFooter/>
      </div>
    </>
  )
}

export default App
