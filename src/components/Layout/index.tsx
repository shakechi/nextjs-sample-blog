import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
