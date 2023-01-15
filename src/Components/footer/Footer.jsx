import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Yogesh</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/yogesh_parmar108/" className="footer__social-link" target="_blank">
            <i className="uil uil-instagram"></i>
          </a>

          <a href="https://www.facebook.com/parmar.yogesh.121" className="footer__social-link" target="_blank">
            <i className="uil uil-facebook-f"></i>
          </a>

          <a href="https://github.com/Yogesh0312" className="footer__social-link" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; YogeshParmar. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
