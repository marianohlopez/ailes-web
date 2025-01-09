//import "./Timeline.css"; // Archivo CSS para los estilos
import { useState } from "react";

const Timeline = () => {
  const [activeYear, setActiveYear] = useState(null);

  const handleButtonClick = (year) => {
    setActiveYear(year);
  };

  const closeModal = () => {
    setActiveYear(null);
  };

  return (
    <div className="container my-4" >
    <h2 style={{marginBottom: "50px", color: "#273480"}}>Nuestra historia</h2>
      {/* Timeline */}
      <div className="d-flex justify-content-between align-items-center position-relative">
        <div className="position-absolute w-100 top-50 start-0 translate-middle-y bg-secondary" style={{ height: "2px" }}></div>
        {["2015", "2017", "2019", "2021", "HOY"].map((year, index) => (
          <button
            key={index}
            className="btn rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "70px", // Tamaño del botón
              height: "70px", // Tamaño del botón
              zIndex: 1,
              backgroundColor: getColorForYear(year),
              color: "#fff", // Color del texto
              fontSize: "18px", // Tamaño de la fuente
              fontWeight: "bold", // Fuente más gruesa
            }}
            onClick={() => handleButtonClick(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeYear && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{activeYear}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>Información relevante sobre el año {activeYear}.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getColorForYear = (year) => {
  switch (year) {
    case "2015":
      return "#ED6C05";
    case "2017":
      return "#FECD0D";
    case "2019":
      return "#273480";
    case "2021":
      return "#43A040";
    case "Hoy":
      return "#7B2582";
    default:
      return "#007bff";
  }
};

export default Timeline;

