import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Hero from './components/Hero'
const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Hero />}/>
        </Routes>
      </div>
    )
}

export default App