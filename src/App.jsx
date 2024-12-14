import Header from './components/Header.jsx'
import './App.css'
import MyButton from './components/MyButton.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

function App() {
  const headerText = "ini halaman header / utama";
  const footerText = () => {
    return (
      <i>ini halaman Footer</i>
    )
  }

  const footerHi = () => {
    return (
      <h1>halaman footer</h1>
    )
  }

  const clicked = () => {
    return alert("button ini di klick")
  }

  const [getValue , setValue] = useState(0)


  return (
    <>
  <Header headerText={headerText}/>
  <MyButton click={clicked}/>
  <Navbar/>
  <div>{getValue}</div>
  <button onClick={() => setValue(getValue + 1)}>plus</button>
  <button onClick={() => setValue(getValue - 1)}>minus</button>
  <Footer footerText={footerText} footerHi={footerHi}/>
    </>
  )
}

export default App
