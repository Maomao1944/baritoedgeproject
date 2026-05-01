import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const bubbles = [
  {
    size: "w-56 h-56",
    position: "bottom-[12%] right-[-40px]",
    duration: 12,
    delay: 0,
  },
  {
    size: "w-40 h-40",
    position: "bottom-[32%] left-[-20px]",
    duration: 10,
    delay: 2,
  },
  {
    size: "w-28 h-28",
    position: "bottom-[4%] left-[18%]",
    duration: 8,
    delay: 1,
  },
];
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-poppins bg-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="h-1/2 bg-[#44ACFF] w-full absolute top-0" />
        <div className="h-1/2 bg-[#FFFFFF] w-full absolute bottom-0" />
        <div className="h-1/2 bg-[#FFFFFF] w-full absolute top-0 rounded-br-[290px]" />
        <div className="h-1/2 bg-[#44ACFF] w-full absolute bottom-0 rounded-tl-[270px]" />

        <div className="absolute top-0 left-0 w-38 h-46 bg-[#44ACFF] rounded-br-full opacity-90" />
      </div>

    {bubbles.map((b, i) => (
  <motion.div
    key={i}
    className={`absolute ${b.size} ${b.position}
    bg-white/80 rounded-full shadow-[0_0_40px_10px_rgba(68,172,255,0.25)]`}
    
    animate={{
      y: [0, 30, 0],
      x: i % 2 === 0 ? [0, -20, 0] : [0, 20, 0], // beda arah
      scale: [1, 1.12, 1],
      opacity: [0.2, 0.4, 0.2],
    }}

    transition={{
      duration: b.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: b.delay,
    }}
  />
))}
      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-10 py-12">
        
        <div className="flex flex-col items-center flex-grow">
          <img src="LogoBE.svg" alt="Logo" className="h-14 mb-10 drop-shadow-md" />

          <div className="relative w-64 h-64">
            <div className="absolute center-box w-56 h-56 rounded-full border-[6px] border-white shadow-2xl overflow-hidden z-20">
              <img src="/Shinichi_1.png" className="w-full h-full object-cover" alt="Shinichi" />
            </div>

            <div className="absolute -top-2 -right-4 w-32 h-32 rounded-full border-[4px] border-white shadow-xl overflow-hidden z-20">
              <img src="/Heiji_1.png" alt="Heiji" />
            </div>

            <div className="absolute bottom-2 -left-6 w-28 h-28 rounded-full border-[4px] border-white shadow-xl overflow-hidden z-30">
              <img src="/Kaito_1.png" alt="Kaito" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-white">Selamat Datang !</h1>
            <p className="text-white/90 mt-2">
              Temukan layanan Antar dan jual beli jajanan lokal dengan mudah di Barito Edge``
            </p>
          </div>

          <div className="w-full space-y-4">
            <button 
              onClick={() => navigate('/login')}
              className="w-full bg-white text-[#44ACFF] py-4 rounded-2xl font-bold"
            >
              Masuk
            </button>

            <button
              onClick={() => navigate('/register')}
              className="w-full border-2 border-white text-white py-4 rounded-2xl font-bold"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;