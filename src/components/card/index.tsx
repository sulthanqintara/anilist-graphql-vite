import React from "react";
import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";
import { useNavigate } from "react-router-dom";

interface Props {
  data: Anime;
  isCheckActive: boolean;
  checked: boolean;
  onChange: (position: number) => void;
  position: number;
}
const CardDiv = styled.div({
  display: "flex",
  marginBottom: "1rem",
  fontFamily: "Roboto",
  alignItems: "center",
  maxHeight: "50rem",
  flexDirection: "column",
  [mq[0]]: { flexDirection: "row", maxHeight: "20rem", alignItems: "flex-start" },
  position: "relative",
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
  overflowWrap: "break-word",
  wordBreak: "break-all",
});
const CoverContain = styled.img({
  objectFit: "contain",
  marginRight: "0.5rem",
  maxHeight: "20rem",
  maxWidth: "20rem",
});
const TextContent = styled.div({
  display: "flex",
  flexDirection: "column",
  maxHeight: "50rem",
  alignItems: "center",
  [mq[0]]: { alignItems: "flex-start" },
});
const CheckBox = styled.input({
  width: "1.5rem",
  height: "1.5rem",
  position: "absolute",
  top: 0,
  left: 0,
});
const Title = styled.div({
  display: "-webkit-box",
  WebkitLineClamp: 3,
  lineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  fontSize: "1.25rem",
  fontWeight: "600",
});

const Card: React.FC<Props> = ({ data, isCheckActive, onChange, position, checked }) => {
  const navigate = useNavigate();
  return (
    <CardDiv
      onClick={() => {
        if (isCheckActive) return onChange(position);
        if (!isCheckActive) {
          navigate(`/detail/${data.id}`);
        }
      }}
    >
      <label>
        {isCheckActive && (
          <CheckBox
            type="checkbox"
            name="collection"
            id={data.id.toString()}
            onChange={() => onChange(position)}
            checked={checked}
          />
        )}
      </label>
      <CoverContain src={data.coverImage.large} />
      <TextContent>
        <Title>{data.title.romaji || "-"}</Title>
        <DescDiv>{data.description}</DescDiv>
      </TextContent>
    </CardDiv>
  );
};

export default Card;
