import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <TailSpin height="200" width="200" color="white" ariaLabel="loading" />
  );
}

export default Loader;
