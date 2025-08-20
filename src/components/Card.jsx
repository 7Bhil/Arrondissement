const Card = ({
  title,
  description,
  image,
  date,
  category,
  href,
  className = "",
  children,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {image && (
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </div>
      )}

      <div className="p-6">
        {category && (
          <div className="flex items-center mb-2">
            <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full font-medium">
              {category}
            </span>
          </div>
        )}

        {title && (
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {href ? (
              <a
                href={href}
                className="hover:text-primary-600 transition-colors"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        )}

        {description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        )}

        {children}

        {date && (
          <div className="flex items-center text-xs text-gray-500 mt-4">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {date}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
