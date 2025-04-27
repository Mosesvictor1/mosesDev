import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;
