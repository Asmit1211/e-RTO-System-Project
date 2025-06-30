import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <main>
      <h1>Hello World</h1>
     </main>
     <Footer/>
    </>
  )
}

export default App
