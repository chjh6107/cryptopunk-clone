import { DocumentData } from "firebase/firestore";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";

const PunkListBlock = styled.div`
  display: flex;
  overflow: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PunkList = ({ punkListData, setSelectedPunk }: DocumentData) => {
  return (
    <PunkListBlock>
      {punkListData.map((punk: DocumentData) => (
        <div onClick={()=>{setSelectedPunk(punk.token_id);}} key={punk.token_id}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </PunkListBlock>
  );
};

export default PunkList;
