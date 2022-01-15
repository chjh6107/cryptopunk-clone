import styled from "styled-components";
import punkLogo from "../assets/images/header/punkLogo.png";
import searchIcon from "../assets/images/header/search-icon.png";
import themeSwitchIcon from "../assets/images/header/theme-switch-icon.png";

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
    background-color: #1c1c1e;
    margin: 10px;
    display: flex;
    flex: 1;
    align-items: center;
    height: 50px;
    border-radius: 25px;

    .searchIconContainer{
        margin: 0 10px 0 15px;
    }
`;

const SearchIconBlock = styled.img`
    width: 20px;
`;
const SearchInputBlock = styled.input`
    margin-right: 10px;
    background-color: transparent;
    border: none;
    width: 100%;
    outline: none;
    color: #808080;
    /* font-size: 16px; */
`;

const HeaderItemsWrapper = styled.div`
    color: #808080;
    display: flex;

    p{
        margin: 10px;
        cursor: pointer;
    }
`;

const HeaderActionsWrapper = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
`;

const ThemeSwitchContainer = styled.div`
    display: flex;
    background-color: #1c1c1e;
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    img{
        width: 25px;
    }
`
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
            <HeaderItemsWrapper>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </HeaderItemsWrapper>

            <HeaderActionsWrapper>
                <ThemeSwitchContainer>
                    <img src={themeSwitchIcon}/>
                </ThemeSwitchContainer>
            </HeaderActionsWrapper>
        </HeaderBlock>
    );
}

export default Header;