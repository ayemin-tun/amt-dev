const LoadingSpin = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-6 h-6"
      >
        <radialGradient
          id="a12"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stopColor="#F2FFEE"></stop>
          <stop offset=".3" stopColor="#F2FFEE" stopOpacity=".9"></stop>
          <stop offset=".6" stopColor="#F2FFEE" stopOpacity=".6"></stop>
          <stop offset=".8" stopColor="#F2FFEE" stopOpacity=".3"></stop>
          <stop offset="1" stopColor="#F2FFEE" stopOpacity="0"></stop>
        </radialGradient>
        <circle
          transformOrigin="center"
          fill="none"
          stroke="url(#a12)"
          strokeWidth="30"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          strokeDashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="2"
            values="360;0"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          transformOrigin="center"
          fill="none"
          opacity=".2"
          stroke="#F2FFEE"
          strokeWidth="30"
          strokeLinecap="round"
          cx="100"
          cy="100"
          r="70"
        ></circle>
      </svg>
    </>
  );
};

export default LoadingSpin;
