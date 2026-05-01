import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, ArrowLeft } from 'lucide-react';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!identifier) {
      alert("Masukkan email atau nomor telepon!");
      return;
    }

    console.log("Data:", identifier);

    // nanti arahkan ke OTP
    navigate('/otp');
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-poppins">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full h-[35vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#44ACFF]" />

       {/*Logo*/}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
       <img 
          src="/LogoBE.svg" 
         alt="Logo" 
         className="h-12 md:h-14"
         />
      </div>

        {/* BACK BUTTON */}
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
          <h1 className="text-4xl font-extrabold text-[#333]">Sign up</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Masukkan email atau nomor telepon untuk mendaftar
          </p>
          <div className="w-16 h-1 bg-[#44ACFF] mt-3 rounded-full" />
        </div>

        <form onSubmit={handleNext} className="space-y-8">

          {/* INPUT EMAIL / PHONE */}
          <div>
            <label className="text-sm text-gray-500 font-semibold">
              Email atau Nomor Telepon
            </label>

            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#44ACFF] mt-2 pb-2">
              {/* icon bisa berubah sesuai input */}
              {identifier.match(/^[0-9]+$/) ? (
                <Phone size={18} className="text-gray-400 mr-3" />
              ) : (
                <Mail size={18} className="text-gray-400 mr-3" />
              )}

              <input
                type="text"
                placeholder="0812xxxx atau email@gmail.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#44ACFF] text-white py-4 rounded-xl font-bold text-lg mt-6">
            Lanjut
          </button>
        </form>

        {/* LOGIN LINK */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          Sudah punya akun?{" "}
          <span 
            onClick={() => navigate('/login')}
            className="text-[#44ACFF] font-semibold cursor-pointer"
          >
            Masuk
          </span>
        </div>

      </div>
    </div>
  );
};