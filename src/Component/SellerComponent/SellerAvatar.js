import React from "react";

export default function Avatar(props) {
  return (
    <div
      className="sellerAvatar"
      style={{
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "violet",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <h3 style={{ color: "floralwhite", fontSize: 52 }}>{props.initials}</h3>
    </div>
  );
}
