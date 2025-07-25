"use client";

import { useSelector } from "react-redux";
import GlobalAlert from "./GlobalAlert";
import { LoaderApi } from "../reasuableComponents/UI/Loader";

const GlobalWrapper = ({ children }) => {

  const isloading = useSelector((state) => {
    return state.loading.Isloading;
  });

  return (
    <>
      <GlobalAlert />
      
      {isloading && (
        <LoaderApi />
      )}

      {/* App Content */}
      {children}
    </>
  );
};

export default GlobalWrapper;
