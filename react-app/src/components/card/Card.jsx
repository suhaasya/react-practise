import React, { useEffect, useState } from "react";
import styles from "./card.module.css";

const Card = ({ title, body, url }) => {
  const styles = {
    marginBottom: "8px",
    border: "1px solid black",
    padding: "16px",
  };

  console.log(url);

  return (
    <div style={styles}>
      <h1>{title}</h1>
      <p>{body}</p>
      <img src={url} alt="" srcset="" />
    </div>
  );
};

export default Card;

export const num = 10;
