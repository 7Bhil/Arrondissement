const Banner = ({
  title,
  subtitle,
  description,
  backgroundImage,
  height,
  textAlign,
  children,
}) => {
  return (
    <div
      className={`${height} bg-cover bg-center bg-no-repeat relative flex items-center justify-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay avec dégradé amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(170, 205, 246, 0.1)" }}
      ></div>

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
          textAlign === "center" ? "text-center" : ""
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-4 drop-shadow-md">
          {subtitle}
        </p>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Banner;
