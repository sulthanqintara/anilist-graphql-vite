import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";

export const CollectionDiv = styled.div({
  minWidth: "10rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
export const CollectionButton = styled.button(({ image }: { image?: string }) => ({
  height: "4rem",
  width: "4rem",
  borderRadius: "4px",
  border: "1px solid gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "4px",
  backgroundImage: `url(${image})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",
}));
export const CollectionButtonLayer = styled.div({
  position: "absolute",
  inset: "0px",
  backgroundColor: "rgba(106, 90, 205, 0.5)",
  height: "4rem",
  width: "4rem",
  borderRadius: "4px",
  zIndex: 2,
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
  wordBreak: "break-word",
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
export const InputNewCollection = styled.input(({ fullWidth }: { fullWidth?: boolean }) => ({
  border: "1px solid black",
  padding: "8px",
  borderRadius: "4px",
  height: "3rem",
  width: fullWidth ? "100%" : "10rem",
}));
export const SubmitContainer = styled.div(({ centered }: { centered?: boolean }) => ({
  display: "flex",
  justifyContent: "center",
  [mq[1]]: { justifyContent: centered ? "center" : "flex-end" },
  marginTop: "1rem",
  gap: "1rem",
}));
export const SubmitButton = styled.button(({ isDelete }: { isDelete?: boolean }) => ({
  backgroundColor: isDelete ? "indianred" : "slateblue",
  opacity: 1,
  ":disabled": { opacity: 0.4 },
  color: "white",
  padding: "8px 12px",
  borderRadius: "4px",
}));
export const DeleteButtonContainer = styled.div({
  marginTop: 0,
  marginLeft: 0,
  position: "absolute",
  top: 0,
  right: 0,
  [mq[0]]: { marginTop: "auto", marginLeft: "auto", position: "inherit" },
});
export const CardContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  [mq[2]]: { gridTemplateColumns: "1fr 1fr" },
  [mq[3]]: { gridTemplateColumns: "repeat(3, 1fr)" },
  height: "100%",
});
