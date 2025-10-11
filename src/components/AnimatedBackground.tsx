import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const mouseGlowRef = useRef<HTMLDivElement | null>(null);
  const targetPosRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Pointer tracking with RAF-driven transform updates to prevent lag
    const handlePointerMove = (e: PointerEvent) => {
      targetPosRef.current.x = e.clientX;
      targetPosRef.current.y = e.clientY;
    };

    let running = true;
    const loop = () => {
      if (!running) return;
      const el = mouseGlowRef.current;
      if (el) {
        const { x, y } = targetPosRef.current;
        // Offset by half the glow size (400px -> 200px) and use transform for GPU acceleration
        el.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      rafIdRef.current = requestAnimationFrame(loop);
    };
    rafIdRef.current = requestAnimationFrame(loop);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      running = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="cyber-grid"></div>
      <div className="particles"></div>
      <div 
        className="mouse-glow"
        ref={mouseGlowRef}
        style={{ transform: 'translate3d(-200px, -200px, 0)' }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;