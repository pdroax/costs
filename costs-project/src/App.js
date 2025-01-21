import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
// import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
// import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
// import Projects from './components/pages/Projects'


function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          {/* <Route exact path='/sobreNos' element={<AboutUs/>}/> */}
          {/* <Route exact path='/instalacao' element={<Services/>}/> */}
          {/* <Route exact path='/blog' element={<Blog/>}/> */}
          <Route exact path='/contato' element={<Contact/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
