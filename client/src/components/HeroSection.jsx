import React from "react";
import "../App.js";
import { Button, LinkButton } from "./ButtonComponent.jsx";
import "./HeroSection.css";

const HeroSection = () => {
  // Fungsi yang akan dipanggil saat tombol "Watch Trailer" diklik
  const handleWatchTrailer = () => {
    const youtubeURL = "https://www.youtube.com/watch?v=13ARO0HDZsQ";
    window.open(youtubeURL, "_blank"); // Membuka tautan baru ke video YouTube
  };

  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <LinkButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </LinkButton>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={handleWatchTrailer}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
