import React from "react";
import { Anime } from "../../pages/Home";
import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";

interface Props {
  data: Anime;
  isCheckActive: boolean;
}
const CardDiv = styled.div({
  display: "flex",
  marginBottom: "1rem",
  fontFamily: "Roboto",
  alignItems: "center",
  maxHeight: "50rem",
  flexDirection: "column",
  [mq[0]]: { flexDirection: "row", maxHeight: "20rem", alignItems: "flex-start" },
});
const DescDiv = styled.div({
  display: "-webkit-box",
  WebkitLineClamp: 7,
  lineClamp: 7,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textAlign: "center",
  [mq[0]]: { textAlign: "initial" },
  marginTop: "1rem",
});
const CoverContain = styled.img({
  objectFit: "contain",
  marginRight: "0.5rem",
  maxHeight: "20rem",
});
const TextContent = styled.div({
  display: "flex",
  flexDirection: "column",
  maxHeight: "50rem",
  alignItems: "center",
  [mq[0]]: { alignItems: "flex-start" },
});
const CheckBox = styled.input({ width: "1.5rem", height: "1.5rem" });
const Label = styled.label({ position: "absolute", top: 0, left: 0 });
const Title = styled.div({
  display: "-webkit-box",
  WebkitLineClamp: 3,
  lineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  fontSize: "1.25rem",
  fontWeight: "600",
});

const Card: React.FC<Props> = ({ data, isCheckActive }) => {
  return (
    <div className="relative">
      {isCheckActive && (
        <Label>
          <CheckBox type="checkbox" name="collection" id={data.id.toString()} />
        </Label>
      )}
      <CardDiv>
        <CoverContain src={data.coverImage.large} />
        <TextContent>
          <Title>{data.title.romaji || "-"}</Title>
          <DescDiv>{data.description}</DescDiv>
        </TextContent>
      </CardDiv>
    </div>
  );
};

export default Card;
