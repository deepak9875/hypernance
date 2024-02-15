import React from "react";
import HelloSignCommon from "../components/common/HelloSignCommon";
import SignUpForm from "../components/auth/SignUpForm";

const Signup = () => {
  return (
    <>
      <div className="w-full max-w-[1920px] mx-auto md:h-screen flex md:flex-row flex-col bg-lynxwhite">
        <div className="md:w-[50%] w-full h-[575px] md:h-full mx-auto bg_color flex  justify-center p-10 md:items-center">
          <HelloSignCommon title="Welcome to Hypernance!" />
        </div>
        <div className="md:w-[50%]  relative w-full h-full   mx-auto flex justify-center  items-center max-md:mt-[-247px] p-5">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
