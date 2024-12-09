import React from "react";

const ResumenPedido = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)", // Efecto de desenfoque
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Fondo blanco semitransparente
        color: "#fff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px", // Bordes redondeados para un efecto más limpio
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Resumen de tu pedido</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Primera columna (70%) */}
        <div
          style={{
            flex: "7",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente para contraste
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h4>Resumen de tu pedido</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "1px solid #2d333b",
              paddingBottom: "10px",
            }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Curso Node.js desde cero"
              style={{ width: "120px", height: "80px", marginRight: "20px" }}
            />
            <div style={{ flex: "1" }}>
              <p style={{ margin: "0" }}>Node.Js desde cero</p>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ff686b",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </div>
            <p style={{ margin: "0", textAlign: "right" }}>$32 USD</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #2d333b",
              paddingBottom: "10px",
            }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Curso Creación de API REST con Node.js"
              style={{ width: "120px", height: "80px", marginRight: "20px" }}
            />
            <div style={{ flex: "1" }}>
              <p style={{ margin: "0" }}>Creación de API REST con Node.js</p>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#ff686b",
                  cursor: "pointer",
                }}
              >
                Eliminar
              </button>
            </div>
            <p style={{ margin: "0", textAlign: "right" }}>$20 USD</p>
          </div>

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <p style={{ fontSize: "18px" }}>
              Total: <strong>$52 USD</strong>
            </p>
          </div>
        </div>

        {/* Segunda columna (30%) */}
        <div
          style={{
            flex: "3",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semitransparente
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p style={{ margin: "0 0 10px" }}>2 Cursos</p>
          <h2 style={{ color: "#00ff6a", fontSize: "32px", margin: "10px 0" }}>$52 USD</h2>
          <button
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Voy a comprar para mí
          </button>
          <button
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "1px solid black",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Voy a comprar como regalo
          </button>
        </div>
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p style={{ color: "#ffc107", fontSize: "14px" }}>¿Necesitas ayuda con tu compra?</p>
        <p style={{ fontSize: "14px" }}>Aprovecha y complementa tus conocimientos con estos cursos relacionados</p>
      </div>
    </div>
  );
};

export default ResumenPedido;
