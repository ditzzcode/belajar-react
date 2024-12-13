import Header from './components/Header.jsx'
import './App.css'
import MyButton from './components/MyButton.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

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
  return (
    <>
  <Header headerText={headerText}/>
  <MyButton/>
  <Navbar/>
  <Footer footerText={footerText} footerHi={footerHi}/>
    </>
  )
}

export default App
