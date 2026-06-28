import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import imgLogo1 from "@/imports/LoginEmail/c331e61fb610ec441601c30133af8749a1655092.png";

export default function SplashPage({ onDone }: { onDone: () => void }) {
  const ovalControls = useAnimation();
  const logoControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    let cancelled = false;

    async function runSequence() {
      await ovalControls.start({
        scaleX: 1, scaleY: 1, opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });
      if (cancelled) return;

      await new Promise((r) => setTimeout(r, 300));
      if (cancelled) return;

      ovalControls.start({
        scaleX: 0, scaleY: 0, opacity: 0,
        transition: { duration: 0.25, ease: "easeIn" },
      });

      await logoControls.start({
        y: -90, scale: 1, opacity: 1,
        transition: { type: "spring", damping: 12, stiffness: 100 },
      });
      if (cancelled) return;

      await logoControls.start({
        y: 0,
        transition: { type: "spring", damping: 14, stiffness: 120 },
      });
      if (cancelled) return;

      await new Promise((r) => setTimeout(r, 250));
      if (cancelled) return;

      await Promise.all([
        logoControls.start({
          x: -85,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        }),
        textControls.start({
          opacity: 1, x: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        }),
      ]);
      if (cancelled) return;

      await new Promise((r) => setTimeout(r, 1000));
      if (cancelled) return;

      onDone();
    }

    runSequence();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div
        className="relative bg-white overflow-hidden shadow-2xl flex-shrink-0 flex items-center justify-center"
        style={{ width: 393, height: 852, borderRadius: 40 }}
      >
        <motion.div
          animate={ovalControls}
          initial={{ opacity: 0, scaleX: 0.1, scaleY: 0.1 }}
          style={{
            position: "absolute",
            width: 180, height: 46,
            borderRadius: "50%",
            background: "#545151",
            top: "50%", left: "50%",
            marginLeft: -90, marginTop: 10,
          }}
        />
        <motion.div
          animate={logoControls}
          initial={{ y: 0, x: 0, scale: 0.1, opacity: 0 }}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            marginLeft: -45, marginTop: -34.5,
            width: 54, height: 69,
          }}
        >
          <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
            <img
              src={imgLogo1}
              alt="Monetra logo"
              style={{ position: "absolute", width: "800%", left: "-50.54%", top: "-95.25%", maxWidth: "none" }}
            />
          </div>
        </motion.div>
        <motion.span
          animate={textControls}
          initial={{ opacity: 0, x: 30 }}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            marginLeft: -50, marginTop: -22,
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: 50, fontWeight: 700, lineHeight: 1,
            background: "linear-gradient(90deg, #8b5bc5 0%, #eb7f9e 50%, #fb9b44 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            whiteSpace: "nowrap",
          }}
        >
          Monetra
        </motion.span>
      </div>
    </div>
  );
}
