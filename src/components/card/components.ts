import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";
export const CardDiv = styled.div(({ isPointer }: { isPointer?: boolean }) => ({
  display: "flex",
  marginBottom: "1rem",
  fontFamily: "Roboto",
  alignItems: "center",
  maxHeight: "50rem",
  flexDirection: "column",
  [mq[0]]: { flexDirection: "row", maxHeight: "20rem", alignItems: "flex-start" },
  position: "relative",
  cursor: "pointer",
}));
export const DescDiv = styled.div({
  display: "-webkit-box",
  WebkitLineClamp: 7,
  lineClamp: 7,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textAlign: "center",
  [mq[0]]: { textAlign: "initial" },
  marginTop: "1rem",
  wordBreak: "break-word",
});
export const CoverContain = styled.img({
  objectFit: "contain",
  marginRight: "0.5rem",
  maxHeight: "20rem",
  maxWidth: "20rem",
});
export const TextContent = styled.div({
  display: "flex",
  flexDirection: "column",
  maxHeight: "50rem",
  alignItems: "center",
  [mq[0]]: { alignItems: "flex-start" },
});
export const CheckBox = styled.input({
  width: "1.5rem",
  height: "1.5rem",
  position: "absolute",
  top: 0,
  left: 0,
});
export const Title = styled.div({
  display: "-webkit-box",
  WebkitLineClamp: 3,
  lineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  fontSize: "1.25rem",
  fontWeight: "600",
});
