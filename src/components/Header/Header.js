import './Header.css';

function Header(props) {
    const element = (
        <header className="site-header flex j-between a-center">
            <h1>Meta Components</h1>
            <ul className="menu flex">
                <li><a href="#">All Components</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </header>
    );
    return element;
}

export default Header;