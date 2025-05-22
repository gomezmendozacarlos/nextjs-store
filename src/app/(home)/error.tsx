"use client";

import { JSX } from "react";

interface ErrorProp {
  error: Error;
  reset: () => void;
}

function Error({ reset }: ErrorProp): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>:(</h1>
      <h1>Alerta Error Error Error!!!!</h1>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  );
}

export default Error;
