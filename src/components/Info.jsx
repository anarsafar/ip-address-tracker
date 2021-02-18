import React from "react";

function Info(props) {
  const { ip, isp, location } = props.info;
  return (
    <div className="info">
      <div>
        <p>ip address</p>
        <h3>{ip}</h3>
      </div>
      <div className="line"></div>
      <div>
        <p>location</p>
        <h3>
          {location.city}, {location.country} {location.postalCode}
        </h3>
      </div>
      <div className="line"></div>
      <div>
        <p>timezone</p>
        <h3>UTC {location.timezone}</h3>
      </div>
      <div className="line"></div>
      <div>
        <p>isp</p>
        <h3>{isp}</h3>
      </div>
    </div>
  );
}

export default Info;
