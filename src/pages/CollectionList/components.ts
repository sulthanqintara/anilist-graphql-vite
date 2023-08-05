import styled from "@emotion/styled";

export const CollectionTitle = styled.div({
  fontSize: "1.5rem",
  lineClamp: 2,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});
export const CollectionHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1rem",
});
export const CollectionCard = styled.div({
  border: "1px solid black",
  borderRadius: "1rem",
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  height: "30rem",
  wordBreak: "break-word",
  padding: "1rem",
  width: "100%",
  position: "relative",
});
export const CenteredCard = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const CoverImage = styled.img({ maxHeight: "100%", maxWidth: "100%" });
export const ImageContainer = styled.div({
  maxHeight: "16rem",
  display: "flex",
  justifyContent: "center",
  margin: "1rem auto",
});
export const NoImage = styled.div({ padding: "4rem", border: "1px solid gray" });
export const CardButton = styled.button(({ isDelete }: { isDelete?: boolean }) => ({
  backgroundColor: isDelete ? "red" : "transparent",
  borderRadius: "4px",
  border: "1px solid black",
}));
export const CardButtonContainer = styled.div({
  position: "absolute",
  top: "1rem",
  right: "1rem",
  display: "flex",
  zIndex: "2",
  gap: "1rem",
});
