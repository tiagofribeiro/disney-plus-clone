import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ICONS from '../../app/icons';
import logo from "../../assets/images/logo.svg";

import { auth, handleSignIn, handleSignOut } from "../../api/firebase";
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
        });
    }, [username]);

    const dispatchUser = (user) => {
        dispatch(setUser({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }

    const handleAuth = () => {
        if (!username) {
            handleSignIn()
                .then((res) => {
                    dispatchUser(res.user);
                }, (rej) => {
                    alert("Erro! Ainda não tratei :(");
                });
        } else {
            auth.signOut().then(() => {
                dispatch(logout());
                navigate('/');
            })
        }
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
                            <UserDropDown>
                                <span onClick={handleAuth}>Sair</span>
                            </UserDropDown>
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


const UserPhoto = styled.img`
    height: 100%;
    border-radius: 50%;
`;

const UserDropDown = styled.div`
    display: flex;
    width: 100px;
    position: absolute;
    top: 60px;
    right: 0;
    padding: 4px 12px;
    justify-content: center;
    font-size: 16px;
    opacity: 0;
    border: 1px solid rgba(255,255,255, 0.3);
    border-radius: 4px;
    background: rgba(0,0,0,0.7);
    box-shadow: black 0 0 12px 0;
    transition: 0.5s;
`;

const UserMenu = styled.div`
    display: flex;
    position: relative;
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        ${UserDropDown} {
            opacity: 1;
        }
    }
`;

export default Header;