import React, { useState } from "react";
import "./Timeline.css"; // Archivo CSS para los estilos

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(null);

  const handleButtonClick = (year) => {
    setActiveYear(year);
  };

  const closeModal = () => {
    setActiveYear(null);
  };

  return (
    <div className="timeline-container">
      {/* Línea de tiempo */}
      <div className="timeline">
        {["2015", "2017", "2019", "2021", "Hoy"].map((year, index) => (
          <button
            key={index}
            className={`timeline-button year-${year}`}
            onClick={() => handleButtonClick(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeYear && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeYear}</h2>
            <p>Información relevante sobre el año {activeYear}.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;

