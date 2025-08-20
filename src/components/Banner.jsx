const Banner = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  overlay = true,
  height = 'h-96',
  textAlign = 'left',
  children 
}) => {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`text-white ${textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left'}`}>
          {subtitle && (
            <p className="text-lg font-medium text-primary-200 mb-2">
              {subtitle}
            </p>
          )}
          
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>
          )}
          
          {description && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </div>
  )
}

export default Banner