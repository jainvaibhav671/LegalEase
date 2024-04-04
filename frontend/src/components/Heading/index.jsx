import React from "react";

const sizes = {
  xl: "text-5xl font-black leading-[60px]",
  s: "text-lg font-bold leading-[23px]",
  md: "text-[22px] font-bold leading-7",
  xs: "text-sm font-bold leading-[21px]",
  lg: "text-4xl font-black leading-[45px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
