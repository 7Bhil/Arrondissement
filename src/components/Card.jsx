import { Link } from "react-router-dom";

const Card = ({
  title,
  description,
  image,
  date,
  category,
  href,
  className,
  children,
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      {image && (
        <div className="h-48 bg-cover bg-center relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          {category && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-medium shadow-md">
              {category}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}
        {children}
        {href && (
          <Link
            to={href}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            style={{ color: "#AACDF6" }}
          >
            Lire la suite
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
