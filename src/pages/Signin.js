import React from "react";
import HelloSignCommon from "../components/common/HelloSignCommon";
import SignInForm from "../components/auth/SignInForm";
const Signin = () => {
  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto md:h-screen flex md:flex-row flex-col bg-lynxwhite">
        <div className="md:w-[50%] w-full h-[575px] md:h-full mx-auto bg_color flex  justify-center p-10 md:items-center">
          <HelloSignCommon title="Welcome to Hypernance, please sign in." />
        </div>
        <div className="md:w-[50%] w-full  md:h-full mx-auto flex justify-center items-center max-md:mt-[-140px] p-5">
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default Signin;
