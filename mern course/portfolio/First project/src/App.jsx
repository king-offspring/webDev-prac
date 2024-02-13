import { useState } from 'react'
import Header from './components/Header';


function App() {
  const [count, setCount] = useState(100);

  return (
    
    <div className="font-bodyFont bg-primaryColor text-gray-1000 min-h-screen">
        <Header />
        <h1>This is my first app</h1>
    </div>
  )
}

export default App
