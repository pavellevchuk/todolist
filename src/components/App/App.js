import React, { Suspense , useEffect} from "react"
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import mainRoutes from '../../helpers/routes'
import Loader from '../Loader'


const App = () => {
  
  useEffect(() => {
    //localStorage.clear()
    if(!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]));
    if(!localStorage.getItem('todos')) localStorage.setItem('todos', JSON.stringify([]));
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
            {renderRoutes(mainRoutes)}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
