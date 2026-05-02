import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const LoginSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/otp", { replace: true });
    }, 3000); // 3 detik

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#44ACFF] text-white font-poppins px-6">

      {/* RIPPLE + ICON */}
      <div className="relative flex items-center justify-center mb-6">

        {/* Ripple */}
        <motion.div
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity }}
          className="absolute w-24 h-24 rounded-full bg-white/30"
        />

        <motion.div
          initial={{ scale: 0, opacity: 0.4 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            delay: 0.5,
          }}
          className="absolute w-24 h-24 rounded-full bg-white/20"
        />

        {/* ICON POP */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="relative w-24 h-24 flex items-center justify-center rounded-full bg-white/20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            className="text-4xl font-bold"
          >
            ✓
          </motion.span>
        </motion.div>

      </div>

      {/* TEXT */}
      <h1 className="text-2xl font-bold text-center">
        Login Berhasil
      </h1>

      <p className="text-white/80 text-sm mt-2 text-center">
        Mengarahkan ke halaman utama...
      </p>

    </div>
  );
};

export default LoginSuccessPage;