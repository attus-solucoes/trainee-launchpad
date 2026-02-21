const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Shape 1 — Blob roxo between Programa and Nubank */}
      <div
        className="absolute top-[120vh] -right-[5%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full opacity-60 md:opacity-100 animate-float"
        style={{
          background: "hsla(272, 89%, 43%, 0.06)",
          filter: "blur(60px)",
        }}
      />

      {/* Shape 2 — Green curve between Benefits and Timeline */}
      <div
        className="absolute top-[320vh] -left-[5%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full opacity-50 md:opacity-100"
        style={{
          background: "hsla(153, 100%, 50%, 0.04)",
          filter: "blur(40px)",
        }}
      />

      {/* Shape 3 — Gradient circle near CTA Final */}
      <div
        className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(272, 89%, 43%, 0.08) 0%, hsla(153, 100%, 50%, 0.04) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
};

export default BackgroundShapes;
