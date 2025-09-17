const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="animate-spin h-12 w-12 text-emerald-600"
          viewBox="0 0 50 50"
        >
          <circle
            className="opacity-20"
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
          />
          <circle
            className=""
            cx="25"
            cy="25"
            r="20"
            stroke="url(#emeraldGradient)"
            strokeWidth="5"
            strokeDasharray="90 150"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient
              id="emeraldGradient"
              x1="0"
              y1="0"
              x2="50"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34d399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-emerald-600 font-medium text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
