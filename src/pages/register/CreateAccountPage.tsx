import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Eye, EyeOff, User } from "lucide-react";

export const CreateAccountPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Tambah validasi username
    if (!username || !password || !confirm) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (password.length < 6) {
      alert("Password minimal 6 karakter!");
      return;
    }

    if (password !== confirm) {
      alert("Password tidak cocok!");
      return;
    }

    console.log("Data OK:", { username, password });
    navigate("/createaccountsuccess"); 
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-poppins">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full h-[35vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#44ACFF]" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-white p-2 z-20"
        >
          <ArrowLeft size={24} />
        </button>
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="M0,224L60,202C120,181,240,139,360,122C480,107,600,117,720,144C840,171,960,213,1080,202C1200,192,1320,128,1440,96V320H0Z"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col px-8 pt-[32vh]">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#333]">
            Buat Akun
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Tentukan username dan password kamu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* INPUT USERNAME */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Username
            </label>
            <div className="flex items-center border-b-2 border-gray-200 mt-2 pb-2">
              <User size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Contoh : Shulaiman kiw kiw"
                className="w-full outline-none text-[#333]"
              />
            </div>
          </div>

          {/* INPUT PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Password
            </label>
            <div className="flex items-center border-b-2 border-gray-200 mt-2 pb-2">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full outline-none"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="ml-2 text-gray-400"
              >
                {show ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Konfirmasi Password
            </label>
            <div className="flex items-center border-b-2 border-gray-200 mt-2 pb-2">
              <Lock size={18} className="text-gray-400 mr-3" />
              <input
                type={show ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Ulangi password"
                className="w-full outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#44ACFF] text-white py-4 rounded-xl font-bold text-lg shadow-md active:scale-95 transition mt-4"
          >
            Buat Akun
          </button>
        </form>
      </div>
    </div>
  );
};