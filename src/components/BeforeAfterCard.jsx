import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function BeforeAfterCard({ title, desc, beforeImg, afterImg }) {
  const containerRef = useRef(null);
  const [slider, setSlider] = useState(0);
  const directionRef = useRef(1);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width to keep the before image correctly sized
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prev) => {
        let next = prev + directionRef.current * 1.5; // Slightly slower, smoother speed

        if (next >= 100) {
          next = 100;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }

        return next;
      });
    }, 30); // Higher frequency for smoother animation (was 40)

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }} // Gentler hover effect than full scale
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* SLIDER CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100"
      >
        {/* AFTER IMAGE (Base Image) */}
        <img
          src={afterImg}
          alt={`${title} - After cleaning`}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* BEFORE IMAGE (Clipped on top) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          {/* Keep the image full width inside the clipped div so it doesn't squish */}
          <img
            src={beforeImg}
            alt={`${title} - Before cleaning`}
            loading="lazy"
            className="absolute top-0 left-0 h-full max-w-none object-cover"
            style={{
              width: containerWidth > 0 ? `${containerWidth}px` : "100vw",
            }}
          />
        </div>

        {/* SLIDER LINE & HANDLE */}
        <div
          className="absolute top-0 h-full w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 flex items-center justify-center"
          style={{ left: `calc(${slider}% - 1.5px)` }}
        >
          {/* Dragger Handle (Visual only) */}
          <div className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
            <div className="w-[2px] h-3 bg-gray-400 rounded-full mx-0.5"></div>
            <div className="w-[2px] h-3 bg-gray-400 rounded-full mx-0.5"></div>
          </div>
        </div>

        {/* LABELS */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded shadow-sm z-20">
          Before
        </div>

        <div className="absolute top-3 right-3 bg-blue-600/80 backdrop-blur-sm text-white text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded shadow-sm z-20">
          After
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center flex-grow flex flex-col justify-center">
        <h3 className="font-bold text-gray-900 text-lg leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{desc}</p>
      </div>
    </motion.div>
  );
}

export default BeforeAfterCard;
