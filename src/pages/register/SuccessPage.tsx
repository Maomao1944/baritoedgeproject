import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#44ACFF] font-poppins px-6 text-white">
<div className="relative flex items-center justify-center mb-6">

  {/* RIPPLE 1 */}
  <motion.div
    initial={{ scale: 0, opacity: 0.4 }}
    animate={{ scale: 3, opacity: 0 }}
    transition={{
      duration: 1,
      ease: "easeOut",
      repeat: Infinity,
    }}
    className="absolute w-24 h-24 rounded-full bg-white/30"
  />

  {/* RIPPLE 2 (delay biar berlapis) */}
  <motion.div
    initial={{ scale: 0, opacity: 0.4 }}
    animate={{ scale: 2.5, opacity: 0 }}
    transition={{
      duration: 1.5,
      ease: "easeOut",
      repeat: Infinity,
      delay: 0.5,
    }}
    className="absolute w-24 h-24 rounded-full bg-white/10"
  />

  {/* ICON POP */}
  <motion.div
    initial={{ scale: 0, rotate: -180, opacity: 0 }}
    animate={{ scale: 1, rotate: 0, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 180,
      damping: 14,
    }}
    className="relative w-24 h-24 flex items-center justify-center rounded-full bg-white/20"
  >
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 180,
        damping: 14,
      }}
      className="text-4xl font-bold text-white"
    >
      ✓
    </motion.span>
  </motion.div>

</div>

    {/* TITLE */}
    <h1 className="text-2xl font-bold text-center">
      Akun Berhasil Dibuat
    </h1>

    {/* DESC */}
    <p className="text-sm text-white/80 text-center mt-2">
      Kamu akan diarahkan ke halaman utama...
    </p>

  </div>
);
};

export default SuccessPage;