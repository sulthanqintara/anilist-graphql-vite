import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import mq from "../../../styles/mediaQuery";

interface Nav {
  to: string;
  name: string;
}
const Header = () => {
  const HeaderNav = styled.nav({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "slateblue",
    boxShadow: "0px 10px 67px -17px rgba(0,0,0,0.75)",
  });
  const HeaderNavLink = styled(NavLink)({
    [mq[0]]: { margin: "1rem" },
    margin: "1rem 0.5rem",
    textDecoration: "none",
    color: "black",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "1.25rem",
    ":hover": { textShadow: "0px 0px 12px rgba(222, 222, 33, 0.5) !important" },
    transitionDuration: ".5s",
  });
  const NavList: Nav[] = [
    { to: "/", name: "Home" },
    { to: "collection", name: "Collection" },
  ];
  return (
    <HeaderNav>
      {NavList.map((nav, idx) => (
        <HeaderNavLink
          to={nav.to}
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "black",
              textShadow: isActive ? "0px 0px 16px rgba(222, 222, 33, 1)" : "initial",
            };
          }}
          key={idx}
        >
          {nav.name}
        </HeaderNavLink>
      ))}
    </HeaderNav>
  );
};

export default Header;
