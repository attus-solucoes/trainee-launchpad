const HeroWave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full z-[1] pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[70px] block"
      >
        <path
          d="M0,45 C180,75 360,10 540,35 C720,60 900,15 1080,40 C1260,65 1380,20 1440,35 L1440,80 L0,80 Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </div>
  );
};

export default HeroWave;
