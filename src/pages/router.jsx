import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { App } from '../App'
import { Homepage } from './homepage/HomePage'
import { Catalog } from './catalog/Catalog'
import { SingIn } from './singIn'
import { SingUp } from './singUp'
import { AboutPage } from './about/aboutPage'
import { ProfilePage } from './profile/profilePage'
import { Homepage } from './homepage/Homepage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="films" element={<Catalog />} />
      <Route path="signin" element={<SingIn />} />
      <Route path="signup" element={<SingUp />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>,
  ),
)
