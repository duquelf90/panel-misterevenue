import React, { Fragment } from "react";
import RcDrawer from "rc-drawer";

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) => {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className ? className : ""}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration="0.4s"
        {...props}
      >
        {closeButton && (
          <div onClick={toggleHandler} className={closeBtnStyle}>
            {closeButton}
          </div>
        )}
        <div className={drawerStyle}>{children}</div>
      </RcDrawer>
      <div className=" inline-block" onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
};

export default Drawer;
