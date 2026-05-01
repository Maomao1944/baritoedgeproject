import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const BiodataPage = () => {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [tglLahir, setTglLahir] = useState<Date | null>(null);
  const [agree, setAgree] = useState(false);

  const [openPicker, setOpenPicker] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama || !tglLahir || !gender) {
      alert("Semua data wajib diisi!");
      return;
    }

    if (!agree) {
      alert("Kamu harus menyetujui syarat & ketentuan!");
      return;
    }

    console.log({ nama, tglLahir, gender });

    navigate("/createaccountpage");
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-poppins">
      

     {/* HEADER */}
<div className={`absolute top-0 left-0 w-full h-[35vh] overflow-hidden transition-all duration-300 ${openPicker ? "blur-sm" : "blur-0"}`}>
  <div className="absolute inset-0 bg-[#44ACFF]" />

  {/* Logo ikut di dalam div yang kena blur */}
  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
    <img 
      src="/LogoBE.svg" 
      alt="Logo" 
      className="h-12 md:h-14"
    />
  </div>

  <button 
    onClick={() => navigate(-1)}
    className="absolute top-6 left-6 z-20 text-white p-2 rounded-full"
  >
    <ArrowLeft size={24} />
  </button>

  <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
    <path fill="#fff" d="M0,224L60,202C120,181,240,139,360,122C480,107,600,117,720,144C840,171,960,213,1080,202C1200,192,1320,128,1440,96V320H0Z"/>
  </svg>
</div>
      {/* CONTENT */}
      <div className="relative z-10 flex flex-col px-8 pt-[32vh]">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#333]">Data Diri</h1>
          <p className="text-gray-500 text-sm mt-2">
            Lengkapi data untuk melanjutkan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* NAMA */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Nama Lengkap
            </label>
            <div className="flex items-center border-b-2 border-gray-200 mt-2 pb-2">
              <User size={18} className="text-gray-400 mr-3" />
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full outline-none"
              />
            </div>
          </div>

        {/* TANGGAL LAHIR */}
<div>
  <label className="text-sm font-semibold text-gray-500">
    Tanggal Lahir
  </label>

  <div
    onClick={() => setOpenPicker(true)}
    className="flex items-center border-b-2 border-gray-200 mt-2 pb-2 cursor-pointer"
  >
    <Calendar size={18} className="text-gray-400 mr-3" />

    <span className="text-gray-700">
      {tglLahir
        ? tglLahir.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
        : "Pilih tanggal lahir"}
    </span>
  </div>
</div>
{openPicker && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md px-4">

    {/* CARD */}
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl relative">

      {/* CLOSE (X) */}
      <button
        onClick={() => setOpenPicker(false)}
        className="absolute top-4 left-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* TITLE */}
      <div className="pt-10 pb-4 text-center">
        <h2 className="text-lg font-semibold text-[#333]">
          Pilih Tanggal Lahir
        </h2>
      </div>

      {/* DATE PICKER */}
      <div className="px-6 flex justify-center">
  <DatePicker
    selected={tglLahir}
    onChange={(date: Date | null) => setTglLahir(date)}
    inline
    showMonthDropdown
    showYearDropdown
    dropdownMode="select"
    scrollableYearDropdown
    yearDropdownItemNumber={100}
    maxDate={new Date()}
    calendarClassName="custom-datepicker"
  />
</div>
      {/* BUTTON */}
      <div className="p-6">
        <button
          onClick={() => setOpenPicker(false)}
          className="w-full bg-[#44ACFF] text-white py-3 rounded-xl font-semibold active:scale-95 transition"
        >
          Pilih Tanggal
        </button>
      </div>

    </div>
  </div>
)}
          {/* GENDER */}
          <div>
            <label className="text-sm font-semibold text-gray-500">
              Jenis Kelamin
            </label>

            <div className="flex gap-4 mt-3">
              <button
                type="button"
                onClick={() => setGender("Laki-laki")}
                className={`flex-1 py-3 rounded-xl border-2 font-semibold ${
                  gender === "Laki-laki"
                    ? "bg-[#44ACFF] text-white border-[#44ACFF]"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                Laki-laki
              </button>

              <button
                type="button"
                onClick={() => setGender("Perempuan")}
                className={`flex-1 py-3 rounded-xl border-2 font-semibold ${
                  gender === "Perempuan"
                    ? "bg-[#44ACFF] text-white border-[#44ACFF]"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                Perempuan
              </button>
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1 accent-[#44ACFF]"
            />

            <p className="text-sm text-gray-600">
              Saya setuju dengan{" "}
              <span
                onClick={() => navigate("/syarat-ketentuan")}
                className="text-[#44ACFF] font-semibold cursor-pointer"
              >
                syarat dan ketentuan
              </span>
            </p>
          </div>

          {/* BUTTON */}
          <button
            disabled={!nama || !tglLahir || !gender || !agree}
            className={`w-full py-4 rounded-xl font-bold text-white transition ${
              nama && tglLahir && gender && agree
                ? "bg-[#44ACFF]"
                : "bg-gray-300"
            }`}
          >
            Selesai
          </button>

        </form>
      </div>
    </div>
  );
};