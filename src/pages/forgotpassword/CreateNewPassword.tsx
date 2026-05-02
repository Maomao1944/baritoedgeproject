import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Eye, EyeOff } from "lucide-react";

export const CreateNewPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

if (!agree) {
  alert("Silakan konfirmasi terlebih dahulu!");
  return;
}

    if (!password || !confirm) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (password !== confirm) {
      alert("Password tidak cocok!");
      return;
    }

    navigate("/passwordchanged");
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-poppins">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full h-[35vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#44ACFF]" />

        {/* LOGO */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <img src="/LogoBE.svg" alt="Logo" className="h-12" />
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

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#333]">
            Buat Password Baru
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Masukkan password baru untuk akun Anda
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Password Baru
            </label>

            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#44ACFF] mt-2 pb-2">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password baru"
                className="w-full outline-none bg-transparent"
              />
              <button type="button" onClick={() => setShow(!show)}>
                {show ? <EyeOff size={20}/> : <Eye size={20}/>}
              </button>
            </div>
          </div>

          {/* CONFIRM */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Konfirmasi Password
            </label>

            <div className="flex items-center border-b-2 border-gray-200 focus-within:border-[#44ACFF] mt-2 pb-2">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={show ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Ulangi password"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* CHECKBOX KONFIRMASI */}
<div className="flex items-start gap-2">
  <input
    type="checkbox"
    checked={agree}
    onChange={() => setAgree(!agree)}
    className="mt-1 accent-[#44ACFF]"
  />

  <p className="text-sm text-gray-600">
    Saya yakin untuk mengubah password
  </p>
</div>

          {/* BUTTON */}
          <button
            className={`w-full py-4 rounded-xl font-bold text-white transition ${
              password && confirm
                ? "bg-[#44ACFF]"
                : "bg-gray-300"
            }`}
          >
            Simpan Password
          </button>

        </form>
      </div>
    </div>
  );
};