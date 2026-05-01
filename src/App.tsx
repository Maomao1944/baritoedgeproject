import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/Welcome';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';
import { OtpPage } from './pages/register/OtpPage';
import { BiodataPage } from './pages/register/BiodataPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/otp" element={<OtpPage />} />
       <Route path="/biodata" element={<BiodataPage />} />
      </Routes>
    </Router>
  );
  
}

export default App;