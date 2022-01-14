import styled from "styled-components";
import punkLogo from "../assets/images/header/punkLogo.png";
import searchIcon from "../assets/images/header/search-icon.png";

const HeaderBlock = styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// const LogoContainerBlock = styled.div`
    
// `;

const PunkLogoBlock = styled.img`
    width: 100px;
    margin-left: 10px;
    margin-right: 40px;
`;

const SearchBarBlock = styled.div`
    margin: 10px;
    display: flex;
    flex: 1;
    background-color: #1c1c1e;
`;

const SearchIconBlock = styled.img`
    width: 20px;
    margin-right: 10px;
`;
const SearchInputBlock = styled.input`
    background-color: #1c1c1e;
    border: none;
`;

const Header = () =>{
    return (
        <HeaderBlock>
            <div className="logoContainer">
                <PunkLogoBlock src={punkLogo} alt="punk-logo" />
            </div>
            <SearchBarBlock>
                <div className="searchIconContainer">
                    <SearchIconBlock src={searchIcon}/>
                </div>
                <SearchInputBlock placeholder="Collection, item or user."/>
            </SearchBarBlock>
        </HeaderBlock>
    );
}

export default Header;