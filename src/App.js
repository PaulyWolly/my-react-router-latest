/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Component } from 'react'
import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Navbar />

          <Routes>
            <Route end path='/' element={< Home />}></Route>
            <Route end path='/about' element={< About />}></Route>
            <Route end path='/contact' element={< Contact />}></Route>
            {/* <Route path="/" render={(props) => <Home {...props} />} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/contact" render={(props) => <Contact {...props} />} /> */}

          </Routes>
        </div>

      </Router>
    );
  }
}

export default App;
