import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import {HomePage} from "./homePage";
import {App} from "../App";
import {SingIn} from "./singIn";
import {SingUp} from "./singUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<App/>}>
      <Route path={'films'} element={<HomePage/>}/>
      <Route path={'films'} element={<HomePage/>}/>
      <Route path={'signin'} element={<SingIn/>}/>
      <Route path={'signup'} element={<SingUp/>}/>
    </Route>
  )
);