// Standard 404 page

import Logo from "@/assets/icon.png";
import React from "react";
import HeadText from "@/shared/HeadText";

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-full w-full bg-rosePine-base text-center">
      <img alt="logo" src={Logo} className="mx-auto flex py-20" />
      <HeadText>Error 404</HeadText>
      <p className="mx-auto mb-3 flex w-full text-xl">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
