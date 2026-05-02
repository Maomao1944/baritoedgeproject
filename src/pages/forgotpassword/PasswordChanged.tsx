import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const PasswordChanged = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#44ACFF] text-white font-poppins px-6">

      {/* RIPPLE */}
      <div className="relative flex items-center justify-center mb-8">

        <motion.div
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute w-28 h-28 rounded-full bg-white/30"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          className="absolute w-28 h-28 rounded-full bg-white/20"
        />

        {/* ICON POP */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="w-24 h-24 flex items-center justify-center rounded-full bg-white/20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-4xl font-bold"
          >
            ✓
          </motion.span>
        </motion.div>

      </div>

      {/* TEXT */}
      <h1 className="text-2xl font-bold text-center">
        Password Berhasil Diubah
      </h1>

      <p className="text-white/80 text-sm mt-2 text-center">
        Silakan login kembali menggunakan password baru
      </p>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/login")}
        className="mt-10 w-full max-w-sm bg-white text-[#44ACFF] py-4 rounded-xl font-bold text-lg active:scale-95 transition"
      >
        Login Sekarang
      </button>

    </div>
  );
};

export default PasswordChanged;