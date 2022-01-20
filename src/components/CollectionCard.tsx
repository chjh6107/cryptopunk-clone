import styled from "styled-components";
import weth from "../assets/weth.png";

const CollectionCardBlock = styled.div`
    color: white;
    background-color: #1a1c1e;
    border-radius: 20px;
    overflow: hidden;
    width: 300px;
    height: 500px;
    margin-right: 30px;
    cursor: pointer;
    > img {
        width: 100%;
    }
`;

const DetailsBlock = styled.div`
    padding: 20px;
`;

const NameBlock = styled.div`
    font-size: 20px;
    font-weight: 900;
`;

const IdBlock = styled.div`
    color: #a1a5b0;
    font-weight: 600;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    object-fit: contain;
`;

const WethImage = styled.img`
    height: 23px;
    width: 15px;
`;

const PriceBlock = styled.div`
    margin-left: 5px;
    font-weight: 600;
`;

type CollectionCardProps = {
    id: number;
    name: string;
    traits: any;
    image: string;
};
const CollectionCard = ({ id, name, traits, image }: CollectionCardProps) => {
    return (
        <CollectionCardBlock>
            <img src={image} alt={name} />
            <DetailsBlock>
                <NameBlock>
                    {name}
                    <IdBlock> ·#{id} </IdBlock>
                </NameBlock>
                <PriceContainer>
                    <WethImage src={weth} alt="" />
                    <PriceBlock>{traits[0]?.value}</PriceBlock>
                </PriceContainer>
            </DetailsBlock>
        </CollectionCardBlock>
    );
};

export default CollectionCard;
