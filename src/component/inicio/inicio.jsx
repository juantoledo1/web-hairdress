import React from "react";
import background from "../../assets/image/4.jpg";
import "./inicio.css"
const Inicio = () => {
  return (
    <div className="inicio">
      <div className="background"></div>
      <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="content">
          <h1 className="display-4">Título de la Página</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;









// import React from "react";
// import background from "../../assets/image/4.jpg";

// const Inicio = () => {
//   return (
//     <div style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>
//       <div className= "container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
//         <h1 className="display-4">Título de la Página</h1>
//         <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </div>
//     </div>
//   );
// }

// export default Inicio;

