import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama || !password) {
      alert("Nama dan password wajib diisi!");
      return;
    }

    navigate('/otplogin');
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-poppins">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full h-[35vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#44ACFF]" />
        
        {/* LOGO */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <img src="/LogoBE.svg" alt="Logo" className="h-12 md:h-14" />
        </div>

        {/* BACK */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 text-white p-2 rounded-full hover:bg-white/20"
        >
          <ArrowLeft size={24} />
        </button>

        {/* WAVE */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path fill="#fff" d="M0,224L60,202C120,181,240,139,360,122C480,107,600,117,720,144C840,171,960,213,1080,202C1200,192,1320,128,1440,96V320H0Z"/>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col px-8 pt-[32vh]">

        {/* TITLE */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-[#333]">Masuk</h1>
          <p className="text-gray-500 text-sm mt-2">
            Masukkan nama dan password untuk melanjutkan
          </p>
          <div className="w-16 h-1 bg-[#44ACFF] mt-3 rounded-full" />
        </div>

        <form onSubmit={handleLogin} className="space-y-8">

          {/* NAMA */}
          <div>
            <label className="text-sm text-gray-500 font-semibold">
              Nama Lengkap
            </label>
            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#44ACFF] mt-2 pb-2">
              <User size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-500 font-semibold">
              Password
            </label>
            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#44ACFF] mt-2 pb-2">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2"
              >
                {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
              </button>
            </div>
          </div>

{/* LUPA PASSWORD */}
<div className="flex justify-end mt-2">
  <span
    onClick={() => navigate('/forgotpasswordpage')}
    className="text-sm text-[#44ACFF] font-semibold cursor-pointer hover:underline"
  >
    Lupa Password?
  </span>
</div>
          {/* BUTTON */}
          <button className="w-full bg-[#44ACFF] text-white py-4 rounded-xl font-bold text-lg mt-6">
            Masuk
          </button>
        </form>

        {/* REGISTER */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          Belum punya akun?{" "}
          <span 
            onClick={() => navigate('/register')}
            className="text-[#44ACFF] font-semibold cursor-pointer"
          >
            Daftar
          </span>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;