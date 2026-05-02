import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/Welcome';
import { LoginPage } from './pages/login/LoginPage';
import { LoginSuccessPage } from './pages/login/LoginSuccessPage';
import { OtpLogin } from './pages/login/OtpLogin';


import { RegisterPage } from './pages/register/RegisterPage';
import { OtpRegister } from './pages/register/OtpRegister';
import { BiodataPage } from './pages/register/BiodataPage';
import { CreateAccountPage } from './pages/register/CreateAccountPage';
import { SuccessPage } from './pages/register/SuccessPage';

import { ForgotPasswordPage } from './pages/forgotpassword/ForgotPasswordPage';
import { OtpForgotPassword } from './pages/forgotpassword/OtpForgotPassword';
import { ForgotPasswordData } from './pages/forgotpassword/ForgotPasswordData';
import { CreateNewPassword } from './pages/forgotpassword/CreateNewPassword';
import { PasswordChanged } from './pages/forgotpassword/PasswordChanged';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/loginsuccesspage" element={<LoginSuccessPage />} />
       <Route path="/otplogin" element={<OtpLogin />} />


       <Route path="/register" element={<RegisterPage />} />
       <Route path="/otpregister" element={<OtpRegister />} />
       <Route path="/biodata" element={<BiodataPage />} />
       <Route path="/createaccountpage" element={<CreateAccountPage />} />
       <Route path="/createaccountsuccess" element={<SuccessPage />} />

       <Route path="/forgotpasswordpage" element={<ForgotPasswordPage />} />
       <Route path="/otpforgotpw" element={<OtpForgotPassword />} />
       <Route path="/forgotpassworddata" element={<ForgotPasswordData />} />
       <Route path="/createnewpassword" element={<CreateNewPassword />} />
       <Route path="/passwordchanged" element={<PasswordChanged />} />
      </Routes>
    </Router>
  );
  
}

export default App;