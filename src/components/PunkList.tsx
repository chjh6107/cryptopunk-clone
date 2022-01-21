import { DocumentData } from "firebase/firestore";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PunkListBlock = styled.div`
  /* display: flex; */
  /* overflow: scroll; */
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PunkList = ({ punkListData, setSelectedPunk }: DocumentData) => {
  const settings={
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <PunkListBlock>
      <Slider {...settings}>
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
        </Slider>
    </PunkListBlock>
  );
};

export default PunkList;
