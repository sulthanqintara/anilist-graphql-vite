import { useParams } from "react-router-dom";
import { COLLECTIONS } from "..";
import styled from "@emotion/styled";
import CenteredDiv from "../../../styles/CenteredDiv";
import { CardContainer } from "../../Home/styles";
// import { CardDiv } from "../../../components/card/components";
// import { useState } from "react";

const Title = styled.div({ fontSize: "1.5rem", fontWeight: "500" });

const CollectionDetail = () => {
  const { name } = useParams();
  const collectionsStorage: Collection[] = JSON.parse(localStorage.getItem(COLLECTIONS) ?? "[]");
  const collection = collectionsStorage.find((item) => item.name === name);
  // const [isCheckActive, setIsCheckActive] = useState<boolean>(false);
  // const [selected, setSelected] = useState<boolean[]>([]);
  // const onChange = (position: number) =>
  //   setSelected(selected.map((item, index) => (index === position ? !item : item)));

  return (
    <CenteredDiv>
      <Title>{collection?.name}</Title>
      <CardContainer>
        {/* <CardDiv
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
        </CardDiv> */}
      </CardContainer>
    </CenteredDiv>
  );
};

export default CollectionDetail;
