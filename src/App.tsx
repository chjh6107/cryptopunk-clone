import styled from 'styled-components';
import Header from './components/Header'
import { useState } from "react";

import PunkList from './components/PunkList';

//https://youtu.be/hhZtiytNaBQ
//header 1:15:00

const GlobalStyle = styled.div`
    background-color: #000;
    padding: 20px;
    min-height: 100vw;
    max-width: 100vw;
`;

const App = () => {
    const [punkListData, setPunkListData] = useState([
        {
            'token_id':0,
            'name':'Bandana Punk',
            'traits':[{'value':8}],
            'image_url':'../src/assets/punk/1.jpg'
        },
        {
            'token_id':1,
            'name':'Cyber punk',
            'traits':[{'value':13}],
            'image_url':'../src/assets/punk/2.jpg'
        },
        {
            'token_id':2,
            'name':'Cigar Hat Punk',
            'traits':[{'value':9}],
            'image_url':'../src/assets/punk/3.jpg'
        },
        {
            'token_id':3,
            'name':'Captain America Punk',
            'traits':[{'value':17}],
            'image_url':'../src/assets/punk/4.jpg'
        },
        {
            'token_id':4,
            'name':'Pirate King Punk',
            'traits':[{'value':37}],
            'image_url':'../src/assets/punk/5.jpg'
        },
        {
            'token_id':5,
            'name':'Green Tennis Hulk Punk',
            'traits':[{'value':18}],
            'image_url':'../src/assets/punk/6.jpg'
        },
    ]);

    // useEffect(() => {
    //     const getMyNfts = async () => {
    //         const openseaData = await axios.get(
    //             "https://testnets-api.opensea.io/assets?asset_contract_address=0xf1C53f1845906a942E6F22a745A5cD75F515dD59&order_direction=asc"
    //         );
    //         setPunkListData(openseaData.data.assets);
    //         console.log(punkListData);
    //     };
    //     getMyNfts();
    // }, []);

    return (
        <GlobalStyle>
            <Header/>
            <PunkList punkListData={punkListData}/>
        </GlobalStyle>
    )
}

export default App;
