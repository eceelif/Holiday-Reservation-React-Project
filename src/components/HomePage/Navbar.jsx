import React from "react";
import "./Navbar.css"; // Navbar bileşenine özgü CSS dosyasını import edin

const Navbar = ({ useGeceModu, setGeceModu }) => {
  const toggleMode = () => {
    setGeceModu(!useGeceModu); // Gece modu durumunu tersine çevir
  };

  return (
    <nav className={`navbar ${useGeceModu ? "gece-modu" : ""}`}>
      <h1>Tatil Planları İzleyici</h1>
      <div className="dark-mode__toggle">
        <button onClick={toggleMode} className="toggle">
          {useGeceModu ? "Gece Modunu Kapat" : "Gece Modunu Aç"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
