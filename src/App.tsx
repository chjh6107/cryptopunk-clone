import styled from 'styled-components';
import Header from './components/Header'
import {useState, useEffect} from 'react';
import axios from 'axios'; 

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
    const [punkListData, setPunkListData] = useState([]);

    useEffect(() => {
        const getMyNfts = async () => {
            const openseaData = await axios.get(
                "https://testnets-api.opensea.io/assets?asset_contract_address=0xf1C53f1845906a942E6F22a745A5cD75F515dD59&order_direction=asc"
            ,(req, res)=>{
                res.header("Access-Control-Allow-Origin","*");
                
            });
            setPunkListData(openseaData.data.assets);
            console.log(punkListData);
        };
        getMyNfts();
    }, []);
    

    return (
        <GlobalStyle>
            <Header/>
            <PunkList punkListData={punkListData}/>
        </GlobalStyle>
    )
}

export default App;
