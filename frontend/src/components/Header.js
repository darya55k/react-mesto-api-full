import headerLogo from "../images/header-logo.svg";
import { useLocation, Link } from "react-router-dom";
function Header(props) {
    const currentLocation = useLocation();
    return (
        <header className="header">
            <img src={headerLogo} alt="Место" className="header__logo" />
            {currentLocation.pathname === "/" && (
                <div className="header__logged">
                    <p className="header__text">{props.email}</p>
                    <a className="header__link header__link-out" onClick={props.onSignOut}>
                        Выйти
                    </a>
                </div>
            )}
            {currentLocation.pathname === "/signup" && (
                <Link to="/signin" className="header__link">
                    Войти
                </Link>
            )}
            {currentLocation.pathname === "/signin" && (
                <Link to="/signup" className="header__link">
                    Регистрация
                </Link>
            )}
        </header>
    );
}
export default Header;

