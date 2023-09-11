import styled from "styled-components";

const NavMenu = (props) => {
    return (
        <Container>
            {props.items.map((item) => {
                return (
                    <MenuItem key={item.id} href={item.path}>
                        <img src={item.icon} alt=''/>
                        <span>{item.label}</span>
                    </MenuItem>
                )
            })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-flow: row;
    height: 100%;
    margin-left: 28px;
    margin-right: auto;
    padding: 0;
    align-items: center;
    font-size: 12px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuItem = styled.a`
    display: flex;
    max-height: 70px;
    padding: 0 12px;
    align-items: center;
    
    img {
        height: 28px;
        margin: 0 8px;
        z-index: auto;
    }
    span {
        white-space: nowrap;
        position: relative;
        
        &:after {
            height: 2px;
            width: auto;
            position: absolute;
            top: 20px;
            left: 0px;
            right: 4px;
            opacity: 0;
            background-color: #f9f9f9;
            transform: scaleX(0);
            transform-origin: left center;
            transition: all 300ms;
            visibility: hidden;
            content: '';
        }
    }
    
    &:hover {
        span:after {
            opacity: 1 !important;
            transform: scaleX(1);
            visibility: visible;
        }
    }
`;

export default NavMenu;