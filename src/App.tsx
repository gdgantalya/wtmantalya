import './App.css'
import Header from './sections/header/header'
// import About from './sections/about/about'
import Speakers from './sections/speakers/speakers'
import Supporters from './sections/supporters/supporters'
import Agenda from './sections/agenda/agenda'
import Footer from './sections/footer/footer'
import Navigation from './sections/navigation/navigation'
import Registration from './sections/registration/registration'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Registration />
      {/* <About /> */}
      <Speakers />
      <Agenda />
      <Supporters />
      <Footer />
    </>
  )
}

export default App
