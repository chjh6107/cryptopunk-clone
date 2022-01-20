import styled from "styled-components";
import { useEffect, useState } from "react";
import {
    collection,
    DocumentData,
    getDocs,
    getFirestore,
} from "firebase/firestore";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import firebaseInit from "./firebaseInit";
import Main from "./components/Main";

const GlobalStyle = styled.div`
    background-color: #000;
    padding: 20px;
    min-height: 100vw;
    max-width: 100vw;
`;

const App = () => {
    const [punkListData, setPunkListData] = useState<Array<DocumentData>>([]);
    useEffect(() => {
        const db = getFirestore(firebaseInit);
        async function getList() {
            const col = collection(db, "data");
            const snapShot = await getDocs(col);
            const list = snapShot.docs.map((doc) => doc.data());
            setPunkListData(list);
        }
        getList();
    }, []);

    return (
        <GlobalStyle>
            <Header />
            <Main />
            <PunkList punkListData={punkListData} />
        </GlobalStyle>
    );
};

export default App;
