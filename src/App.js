import React from 'react'
import MainNavigation from './containers/MainNavigation'
import Content  from './containers/Content'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
            <MainNavigation />
            <Content />
      </div>
    </BrowserRouter>
  )
}

export default App;
