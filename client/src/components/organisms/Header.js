import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ICONS from '../../app/icons';
import logo from "../../assets/images/logo.svg";

import { auth, handleSignIn } from "../../api/firebase";
import { setUser, logout } from "../../features/users/userSlice";
import { selectedName, selectedEmail, selectedPhoto, } from "../../features/users/userSlice";

import NavMenu from "../molecules/NavMenu";

const menuItems = [
    {
        id: 1,
        path: '/home',
        icon: ICONS.home,
        label: 'INÍCIO',
    },
    {
        id: 2,
        path: '/search',
        icon: ICONS.search,
        label: 'PESQUISAR',
    },
    {
        id: 3,
        path: '/watchlist',
        icon: ICONS.watch,
        label: 'MINHA LISTA',
    },
    {
        id: 4,
        path: '/originals',
        icon: ICONS.original,
        label: 'ORIGINAIS',
    },
    {
        id: 5,
        path: '/movies',
        icon: ICONS.movie,
        label: 'FILMES',
    },
    {
        id: 6,
        path: '/series',
        icon: ICONS.series,
        label: 'SÉRIES',
    },
]

const Header = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector(selectedName);
    const userPhoto = useSelector(selectedPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatchUser(user);
                navigate('/home');
            }
        })
    }, [username]);

    const dispatchUser = (user) => {
        dispatch(setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }

    const handleAuth = () => {
        handleSignIn()
            .then((res) => {
                dispatchUser(res.user);
            }, (rej) => {
                alert("Erro! Ainda não tratei :(");
            });
    }

    return (
        <Nav>
            <Logo>
                <img src={logo} alt="Logo Disney+" />
            </Logo>
            {
                !username ?
                    <LoginButton onClick={handleAuth}>Login</LoginButton>
                    :
                    <>
                        <NavMenu items={menuItems} />
                        <UserMenu>
                            <UserPhoto src={userPhoto} alt="Foto do usuário" />
                            <SignOutButton />
                        </UserMenu>
                    </>
            }
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

const UserMenu = styled.div`

`;

const SignOutButton = styled.a`

`;

const UserPhoto = styled.img`
    height: 52px;
    border-radius: 48px;
`;

export default Header;