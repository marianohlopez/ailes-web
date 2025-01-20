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
    <div id="timeline" className="container" style={{marginTop: "120px", marginBottom: "200px"}} >
      <h2 style={{
            color: "#273480",
            fontWeight: "bold", 
            fontSize: "40px",
            marginRight: "30px"}} 
            className="text-end"
            >¿Quiénes somos?
      </h2>
      <p style={{ color: "#273480",textAlign: "justify", fontSize: "20px", marginTop: "24px"}}>
        Somos un centro que brinda servicio de apoyo a la inclusión escolar y distintos espacios terapéuticos. 
        Acompañamos a estudiantes con discapacidad en su integración al entorno educativo y social, asegurando 
        su participación activa en todos los niveles y promoviendo un entorno inclusivo.
      </p>
      <h2 style={{marginBottom: "50px", marginTop: "118px", color: "#273480", fontSize: "40px"}}>Nuestra historia</h2>
      {/* Timeline */}
      <div className="d-flex justify-content-between align-items-center position-relative">
        <div className="position-absolute w-100 top-50 start-0 translate-middle-y bg-secondary" style={{ height: "2px" }}></div>
        {["2015", "2017", "2019", "2021", "HOY"].map((year, index) => (
          <button
            key={index}
            className="btn rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "70px", 
              height: "70px", 
              zIndex: 1,
              backgroundColor: getColorForYear(year),
              color: "#fff", 
              fontSize: "18px", 
              fontWeight: "bold"
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

