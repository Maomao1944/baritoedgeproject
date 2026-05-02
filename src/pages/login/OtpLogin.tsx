import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const OtpLogin = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<HTMLInputElement[]>([]);

 const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // pindah ke input berikutnya
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

 const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");

    if (code.length < 6) {
      alert("Masukkan kode OTP lengkap!");
      return;
    }

    console.log("OTP:", code);

    navigate("/loginsuccesspage");
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

        {/* BACK */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-20 text-white p-2 rounded-full"
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

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#333]">Verifikasi OTP</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Masukkan kode yang dikirim ke kamu
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-10">

          {/* OTP INPUT */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, i) => (
              <input
                key={i}
              ref={(el) => {
  if (el) inputsRef.current[i] = el;
}}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-[#44ACFF] outline-none"
              />
            ))}
          </div>

          {/* BUTTON */}
          <button className="w-full bg-[#44ACFF] text-white py-4 rounded-xl font-bold text-lg">
            Verifikasi
          </button>

        </form>

        {/* RESEND */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Tidak menerima kode?{" "}
          <span className="text-[#44ACFF] font-semibold cursor-pointer">
            Kirim ulang
          </span>
        </div>

      </div>
    </div>
  );
};