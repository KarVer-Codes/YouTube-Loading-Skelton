import React from "react";
import './header.css'

const Header = () => {
  return (
    <section>
      <header className="header-con fixed-top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          className="logo"
          alt="yt-logo"
        />
        <div className="searchBox">
          <input type="search" className="inputBox" placeholder="search" />
          <button className="serBtn" type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <button type="button" className="createBtn"
        onClick={() => alert('sorry This feature is not available')}>
          Create +
        </button>
        <button className="ser-icon"
         onClick={() => alert('This feature is not available')}
         >
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </button>
      </header>
    </section>
  );
};

export default Header;
