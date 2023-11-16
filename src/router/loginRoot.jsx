import LoginNavigation from "../assets/component/loginNavigation";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
//

export default function LoginPage() {
  if(window.sessionStorage.getItem("token") != null && window.sessionStorage.getItem("refreshToken") != null) {
    window.location.href = '/home'
    return;
  }
  return (
    <div id="login-page-container">
      <ToastContainer position="bottom-center"/>
      <LoginNavigation />
      <Outlet />
    </div>
  );
}
