import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./HomePageFooter.css";

function HomePageFooter() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="footerFirst">
        <div className="me-5 d-none d-lg-block">
          <h1>İLETİŞİM BİLGİLERİ</h1>
          <div className="me-4 d-none d-lg-block">
            <h2>Adres Bilgileri</h2>
            <p> adres ayrintısı </p>
            <p>Telefon numarası:0fgfhghgf02343433</p>
          </div>

          <div>
            <div className="socialMedia">
              <span className="me-4 text-reset">
                <i className="fab fa-facebook-f">facebook</i>
              </span>
              <span className="me-4 text-reset">
                <i className="fab fa-twitter">twitter</i>
              </span>
              <span className="me-4 text-reset">
                <i className="fab fa-google">google</i>
              </span>
              <span className="me-4 text-reset">
                <i className="fab fa-instagram">instagram</i>
              </span>
              <span className="me-4 text-reset">
                <i className="fab fa-linkedin">linkedin</i>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default HomePageFooter;
