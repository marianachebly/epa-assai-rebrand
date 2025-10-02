const FloatingBalloons = () => {
  const balloons = [
    { id: 1, left: "10%", delay: "0s", duration: "8s", size: "40px" },
    { id: 2, left: "25%", delay: "2s", duration: "10s", size: "50px" },
    { id: 3, left: "45%", delay: "1s", duration: "9s", size: "35px" },
    { id: 4, left: "65%", delay: "3s", duration: "11s", size: "45px" },
    { id: 5, left: "80%", delay: "1.5s", duration: "7s", size: "38px" },
    { id: 6, left: "90%", delay: "4s", duration: "10s", size: "42px" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-float"
          style={{
            left: balloon.left,
            bottom: "-60px",
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
            fontSize: balloon.size,
          }}
        >
          🎈
        </div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
