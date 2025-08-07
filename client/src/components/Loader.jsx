const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Bouncing dots loader */}
        <div className="flex space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-600 
                        rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: "0.8s",
              }}
            ></div>
          ))}
        </div>

        {/* Optional loading text */}
        <p className="text-emerald-600 font-medium text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
