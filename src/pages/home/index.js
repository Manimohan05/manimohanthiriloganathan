import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-flex align-items-center justify-content-center flex-wrap">
          <div
            className="h_bg-image"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text">
            <div className="intro mx-auto">
              <h1 className="mb-1x">{introdata.title}</h1>
              <h2 className="fluidz-48 mb-1x">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.Third,
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 20,  
                    deleteSpeed: 20,
                  }}
                />
              </h2>
              <p className="mb-1x">{introdata.description}</p>
              <div className="intro_btn-action pb-5">
                <Link to="/portfolio" className="text_2">
                  <div id="button_p" className="ac_btn btn">
                    View My Work
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
                <Link to="/contact">
                  <div id="button_h" className="ac_btn btn">
                    Get in Touch
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
