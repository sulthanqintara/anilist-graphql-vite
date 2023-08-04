import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const BodyLayout = () => {
  const BodyDiv = styled.div({ padding: "1rem", maxWidth:"100vw" });
  return (
    <BodyDiv id="wrapper">
      <Outlet />
    </BodyDiv>
  );
};

export default BodyLayout;
