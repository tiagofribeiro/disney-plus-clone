import styled from "styled-components";

import logo from '../assets/images/logo.svg';
import homeIcon from '../assets/images/icons/home-icon.svg';
import movieIcon from '../assets/images/icons/movie-icon.svg';
import originalIcon from '../assets/images/icons/original-icon.svg';
import searchIcon from '../assets/images/icons/search-icon.svg';
import watchIcon from '../assets/images/icons/watchlist-icon.svg';
import seriesIcon from '../assets/images/icons/series-icon.svg';

import NavMenu from "./NavMenu";

const menuItems = [
    {
        path: '/home',
        icon: homeIcon,
        label: 'INÍCIO',
    },
    {
        path: '/search',
        icon: searchIcon,
        label: 'PESQUISAR',
    },
    {
        path: '/watchlist',
        icon: watchIcon,
        label: 'MINHA LISTA',
    },
    {
        path: '/originals',
        icon: originalIcon,
        label: 'ORIGINAIS',
    },
    {
        path: '/movies',
        icon: movieIcon,
        label: 'FILMES',
    },
    {
        path: '/series',
        icon: seriesIcon,
        label: 'SÉRIES',
    },
]

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src={logo} alt="Disney+" />
            </Logo>
            <NavMenu items={menuItems} />
            <LoginButton>Login</LoginButton>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    height: 72px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 40px;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 4px;
    background-color: #101423;
    z-index: 3;
`;

const Logo = styled.a`
    width: 80px;
    min-width: 60px;
    max-height: 72px;
    padding: 0;

    img {
        display: block;
    }
`;

const LoginButton = styled.a`
    padding: 12px 16px;
    font-size: 14px;
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.5);
    transition: all 500ms ease;

    &:hover {
        color: #000;
        background-color: #f9f9f9;
    }
`;

export default Header;