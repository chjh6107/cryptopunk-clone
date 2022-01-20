import styled from "styled-components";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import profile from "../assets/owner/profile.png";

const MainBlock = styled.div`
  max-height: 50vh;
  /* color: white; */
`;

const MainContent = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
`;

const PunkHighlight = styled.div`
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const PunkContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  margin-right: 20px;
`;

const SelectedPunk = styled.img`
  object-fit: contain;
  max-width: min(30vw, 40vh);
  max-height: 30vw;
`;

const PunkDetails = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  flex: 0.75;
`;

const Title = styled.div`
  color: white;
  font-size: 96px;
  font-weight: 800;
`;

const ItemNumber = styled.span`
  color: #a1a5b0;
  font-size: 72px;
  align-self: center;
`;

const Owner = styled.div`
  display: flex;
  margin: 10px 0;
  height: 50px;
  >div{
    margin: 0 5px;
  }
`;

const OwnerImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border-radius: 50px;
  overflow: hidden;
  object-fit: contain;
  >img{
    height: 100%;
    width: 100%;
  }
`;

const OwnerDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const OwnerNameAndHandle = styled.div`
  color: white;
  flex: 1;
`;

const OwnerHandle = styled.div`
  color: #00ebfe;
`;

const OwnerLink = styled.div`
  padding: 12px;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid white;
  margin:  0 0 0 10px;
  cursor: pointer;
  >img{
    height: 100%;
    width: 100%;
  }
`;

type MainProps = {
  selectedPunk: number;
  punkListData: DocumentData;
};
const Main = ({selectedPunk, punkListData}: MainProps) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  
  useEffect(() => {
    console.log(selectedPunk);
    console.log(punkListData);
    setActivePunk(punkListData[selectedPunk]);
    console.log("에아",activePunk);
    console.log(activePunk.image_url);
  }, [punkListData, selectedPunk]);
  
  
  return (
    <MainBlock>
      <MainContent>
        <PunkHighlight>
          <PunkContainer>
            <SelectedPunk src={activePunk.image_url} alt="" />
          </PunkContainer>
        </PunkHighlight>

        <PunkDetails>
          <Title>
            {activePunk.name}
            <ItemNumber>·#{activePunk.token_id}</ItemNumber>
          </Title>
          <Owner>
            <OwnerImageContainer>
              <img
                src={profile}
                alt=""
              />
            </OwnerImageContainer>
            <OwnerDetails>
              <OwnerNameAndHandle>
                <div>0x57adcc3c</div>
                <OwnerHandle>@Jonghun_Choe</OwnerHandle>
              </OwnerNameAndHandle>
              <OwnerLink>
                <img src={instagramLogo} alt="" />
              </OwnerLink>
              <OwnerLink>
                <img src={twitterLogo} alt="" />
              </OwnerLink>
              <OwnerLink>
                <img src={moreIcon} alt="" />
              </OwnerLink>
            </OwnerDetails>
          </Owner>
        </PunkDetails>
      </MainContent>
    </MainBlock>
  );
};

export default Main;
