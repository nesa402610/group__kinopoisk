import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import {HomePage} from "./homePage";
import {App} from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<App/>}>
      <Route path={'films'} index element={<HomePage/>}/>
    </Route>
  )
);