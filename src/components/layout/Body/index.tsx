import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const BodyLayout = () => {
  const BodyDiv = styled.div({ padding: "1rem" });
  return (
    <BodyDiv>
      <Outlet />
    </BodyDiv>
  );
};

export default BodyLayout;
