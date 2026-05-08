import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function BeforeAfterCard({ title, desc, beforeImg, afterImg }) {
  const containerRef = useRef(null);
  const [slider, setSlider] = useState(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prev) => {
        let next = prev + directionRef.current * 2;

        if (next >= 100) {
          next = 100;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border"
    >
      {/* SLIDER */}
      <div ref={containerRef} className="relative h-52 overflow-hidden">
        {/* AFTER IMAGE */}
        <img
          src={afterImg}
          alt="after"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* BEFORE IMAGE */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <img
            src={beforeImg}
            alt="before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SLIDER LINE */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white shadow-md"
          style={{ left: `${slider}%` }}
        />

        {/* LABELS */}
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          Before
        </div>

        <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
          After
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}

export default BeforeAfterCard;
