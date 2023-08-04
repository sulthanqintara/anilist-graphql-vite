import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";

export const CollectionDiv = styled.div({
  minWidth: "10rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
export const CollectionButton = styled.button({
  height: "4rem",
  width: "4rem",
  borderRadius: "4px",
  border: "1px solid gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "4px",
});
export const CollectionTitle = styled.div({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  lineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  width: "6rem",
  textAlign: "center",
  height: "3rem",
});
export const CollectionListModal = styled.div({
  display: "grid",
  gridTemplateColumns: "auto",
  justifyContent: "center",
  [mq[0]]: { gridTemplateColumns: "auto auto", justifyContent: "space-between" },
  [mq[1]]: { gridTemplateColumns: "auto auto auto" },
  [mq[2]]: { gridTemplateColumns: "auto auto auto auto auto" },
  gap: "1rem",
});
export const InputNewCollection = styled.input({
  border: "1px solid black",
  padding: "8px",
  borderRadius: "4px",
  height: "3rem",
  width: "10rem",
});
export const FlexEnd = styled.div({ display: "flex", justifyContent: "flex-end" });
export const SubmitButton = styled.button({
  backgroundColor: "slateblue",
  ":disabled": { backgroundColor: "rgba(106, 90, 205, 0.4)" },
  color: "white",
  padding: "8px 12px",
  borderRadius: "4px",
});
