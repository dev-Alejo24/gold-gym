import React from "react";
import FormSale from "../components/FormSale/FormSale";

function Sale() {
  return (
    <div>
      <h1>Pagina de ventas</h1>

      <h1 style={{ textAlign: "center" }}>Sistema deVentas</h1>

      {/* llama al FormSale */}
      <div className="container mt-3">
        {
          <FormSale/>
        }
      </div>
    </div>
  );
}

export default Sale;
