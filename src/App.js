import {Outlet} from "react-router-dom";
import {Header} from "./components/header";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {signIn} from "./store/slices/userSlice";

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const ls = localStorage.getItem('id')
    if (ls) {
      dispatch(signIn(ls))
    }
  }, [dispatch]);
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}