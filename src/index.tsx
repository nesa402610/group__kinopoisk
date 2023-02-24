import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/store'
import { App } from './App'
import { Homepage } from './pages/homepage/HomePage'
import { Catalog } from './pages/catalog/Catalog'
import { SingIn } from './pages/SingIn'
import { SingUp } from './pages/SingUp'
import { AboutPage } from './pages/about/AboutPage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { FilmDetailed } from './pages/filmDetailed/FilmDetailed'
import { ActorDetail } from './pages/ActorDetail/ActorDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
       path: "films",
       element: <Catalog />,
      },
      {
        path: "signin",
        element: <SingIn />,
       },
       {
        path: "signup",
        element: <SingUp />,
       },
       {
        path: "about",
        element: <AboutPage />,
       },
       {
        path: "profile",
        element: <ProfilePage />,
       },
       {
        path: "film/:ID",
        element: <FilmDetailed />,
       },
       {
        path: "actor/:ID",
        element: <ActorDetail />,
       },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
