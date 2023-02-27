import React from 'react'
// This shared component is a demonstration of shared functionalities
// It also contains the header font and size so we don't make errors
type Props = {
    children : React.ReactNode;
};

const HeadText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-jetbrainsmono text-3xl font-bold">{children}</h1>
  );
};

export default HeadText