import styled from 'styled-components';

const StyledHeader = styled.header`
    grid-column: 3 / 11;
    margin-block-end: 3rem;
`;
const Title = styled.h1`
    ::before {
        content: '🚀 ';
    }
    color: var(--color-brand);
`;
const Menu = styled.ul`
    gap: 1rem;
`;
const Link = styled.a`
    :hover {
        color: var(--color-brand);
    }
`;

function Header(props) {
    const element = (
        <StyledHeader className="flex j-between a-center">
            <Title>Meta Components</Title>
            <Menu className="flex">
                <li><Link href="#">All Components</Link></li>
                <li><Link href="#">About</Link></li>
            </Menu>
        </StyledHeader>
    );
    return element;
}

export default Header;