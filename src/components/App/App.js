import React, { Suspense } from "react"
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import mainRoutes from '../../helpers/routes'
import Loader from '../Loader'


const App = () => {
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
