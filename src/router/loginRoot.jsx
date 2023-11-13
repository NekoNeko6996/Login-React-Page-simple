import LoginNavigation from "../assets/component/loginNavigation";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
//

export default function LoginPage() {

  return (
    <div id="login-page-container">
      <ToastContainer position="bottom-center"/>
      <LoginNavigation />
      <Outlet />
    </div>
  );
}
