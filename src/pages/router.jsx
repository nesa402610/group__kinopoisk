import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { App } from '../App'
import { Homepage } from './homepage/homePage'
import { Catalog } from './catalog/Catalog'
import { SingIn } from './SingIn'
import { SingUp } from './SingUp'
import { AboutPage } from './about/AboutPage'
import { ProfilePage } from './profile/ProfilePage'
import { FilmDetailed } from './filmDetailed/FilmDetailed'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="films" element={<Catalog />} />
      <Route path="signin" element={<SingIn />} />
      <Route path="signup" element={<SingUp />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="film/:ID" element={<FilmDetailed />} />
    </Route>,
  ),
)
