import React from "react";
import arrow from "../images/icon-arrow.svg";
import Info from "./Info";
import LoadingBar from "./LoadingBar";

function Header(props) {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          name="inputValue"
          value={props.inputValue}
          onChange={(e) => props.handleChange(e)}
        />
        <button>
          <span className="arrow">
            <img src={arrow} alt="" />
          </span>
        </button>
      </form>
      {props.isLoading ? (
        <LoadingBar />
      ) : props.info.code === 422 || props.info.code === 400 ? (
        <div className="error">
          Please make sure enter valid IP Address or Domain name
        </div>
      ) : props.info.length !== 0 ? (
        <Info info={props.info} />
      ) : null}
    </header>
  );
}

export default Header;
