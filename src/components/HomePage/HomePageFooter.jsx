import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function HomePageFooter() {
  return (
    <MDBFooter
      bgColor="bg-gray-100"
      className="text-center text-lg-start text-muted"
    >
      <section className="footerFirst py-8 px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="me-8 mb-4 md:mb-0">
            <h1 className="text- size-12 md:text-1 font-bold mb-2">
              İLETİŞİM BİLGİLERİ
            </h1>
            <div>
              <p className="text-lg font-semibold">
                Adres: <span className="font-normal"> cadde sokak semt</span>
              </p>

              <p className="text-lg font-semibold">
                Telefon numarası: <span className="font-normal">0343433</span>
              </p>
            </div>
          </div>
          <div className="socialMedia flex items-center">
            <a href="#" className="me-4 text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="me-4 text-blue-400 hover:text-blue-600">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="me-4 text-red-600 hover:text-red-800">
              <i className="fab fa-google"></i> Google
            </a>
            <a href="#" className="me-4 text-pink-600 hover:text-pink-800">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="me-4 text-blue-700 hover:text-blue-900">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div
        className="text-center py-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p className="text-sm text-gray-600">© 2024 Copyright:</p>
        <a className="text-blue-700 font-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default HomePageFooter;
