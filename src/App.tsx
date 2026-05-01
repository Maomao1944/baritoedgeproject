import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/Welcome';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';
import { OtpPage } from './pages/register/OtpPage';
import { BiodataPage } from './pages/register/BiodataPage';
import { CreateAccountPage } from './pages/register/CreateAccountPage';
import { SuccessPage } from './pages/register/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
       <Route path="/login" element={<LoginPage />} />


       <Route path="/register" element={<RegisterPage />} />
       <Route path="/otp" element={<OtpPage />} />
       <Route path="/biodata" element={<BiodataPage />} />
       <Route path="/createaccountpage" element={<CreateAccountPage />} />
       <Route path="/createaccountsuccess" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
  
}

export default App;