import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import { App } from '../App'
import { Catalog } from './catalog/Catalog'
import { SingIn } from './singIn'
import { SingUp } from './singUp'
import { Homepage } from './homepage/homePage'
import { AboutPage } from './about/aboutPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="films" element={<Catalog />} />
      <Route path="signin" element={<SingIn />} />
      <Route path="signup" element={<SingUp />} />
      <Route path="about" element={<AboutPage />} />
    </Route>,
  ),
)
