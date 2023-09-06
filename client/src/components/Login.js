import styled from 'styled-components';

import loginBackground from '../assets/images/login-background.jpg';
import topBrandLogo from '../assets/images/brand-logo-top.svg';
import bottomBrandLogo from '../assets/images/brand-logo-bottom.png';

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Background />
                <Main>
                    <Logo src={topBrandLogo} />
                    <SignUpButton href='#'>ACESSAR</SignUpButton>
                    <DescriptionText>
                        Acho bom dizer que este não é um site oficial da Disney, apenas um estudo de React. 
                        Veja outros projetos meus <HiddenLink href='https://tiagofribeiro.github.io/' target='_blank'>aqui</HiddenLink>. 
                        Foi esse cara <HiddenLink href='https://www.youtube.com/watch?v=R_OERlafbmw' target='_blank'>aqui</HiddenLink> que me ensinou a fazer.
                        É possível que você não leia esse texto.
                    </DescriptionText>
                    <Logo src={bottomBrandLogo} />
                </Main>
            </Content>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: 80px 40px;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: cover;
    background-image: url(${loginBackground});
    z-index: -1;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 2vw auto;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    display: block;
    width: 100%;
    max-width: 700px;
    min-height: 1px;
    margin: 24px 0;
`;

const SignUpButton = styled.a`
    min-width: 100%;
    margin: 12px 0;
    padding: 12px 0;
    font-size: 24px;
    font-weight: bold;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: #0A7FB3;
    transition: 0.2s;

    &:hover {
        margin: 16px 0;
        background-color: #06B0D4;
    }
`;

const DescriptionText = styled.span`
    margin-top: 24px;
    font-size: 16px;
`;

const HiddenLink = styled.a`
    &:hover {
        font-weight: bold;
    }
`;

export default Login;