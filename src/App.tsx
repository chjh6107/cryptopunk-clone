import styled from 'styled-components';
import Header from './components/Header'
//https://youtu.be/hhZtiytNaBQ
//header 49:27까지

const GlobalStyle = styled.div`
    background-color: #000;
    padding: 20px;
    min-height: 100vw;
    max-width: 100vw;
`;

const App = () => {
    return (
        <GlobalStyle>
            <Header/>
        </GlobalStyle>
    )
}

export default App;
