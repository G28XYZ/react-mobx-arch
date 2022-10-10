import React, { FC, ReactNode } from "react";
import "./style.scss";

interface SpinnerProps {
  children: ReactNode;
  active: boolean;
}

const Spinner: FC<SpinnerProps> = ({ children, active }) => {
  if (active) {
    return (
      <div className="Spinner">
        <div className="load"></div>
        <div className="overlay"></div>
        {children}
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default React.memo(Spinner);
