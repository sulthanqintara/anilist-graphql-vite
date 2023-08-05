import React from "react";
import { useNavigate } from "react-router-dom";
import { CardDiv, CheckBox, CoverContain, DescDiv, TextContent, Title } from "./components";

interface Props {
  data: Anime;
  isCheckActive: boolean;
  checked: boolean;
  onChange: (position: number) => void;
  position: number;
}

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
