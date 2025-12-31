import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    window.onscroll = () => {
        setMenuOpen(false)
    }

    return (
        <header className="pos-a width-100">
            <div className="d-flex align-i-center just-c-sb pad-1-5r">
                <div>
                    <img src="/assets/shared/logo.svg" alt="Logo" />
                </div>

                <div className="pos-a line hide-mob"></div>

                <div>
                    <nav>
                        <img src="/assets/shared/icon-hamburger.svg" alt="" className="hide-des" onClick={() => setMenuOpen(true)} />
                        <ul className={"d-flex align-i-center gap-2r font-f-Bar-Con lett-sp-2 word-sp-05r menu tr-a-03s-ea flex-column-mob align-i-st-mob" + (menuOpen ? ' active' : '')}>
                            <img src="/assets/shared/icon-close.svg" alt="" className="pos-a icon-close hide-des" onClick={() => setMenuOpen(false)} />
                            <Link to="/" className="color-w">
                                <li onClick={() => location.pathname === '/'} className={"pad-tb-2-5r tr-a-03s-ea" + (location.pathname === '/' ? ' active-nav' : ' inactive-nav')}><b>00</b> HOME</li>
                            </Link>

                            <Link to="/destination" className="color-w">
                                <li onClick={() => location.pathname === '/destination'} className={"pad-tb-2-5r tr-a-03s-ea" + (location.pathname === '/destination' ? ' active-nav' : ' inactive-nav')}><b>01</b> DESTINATION</li>
                            </Link>

                            <Link to="/crew" className="color-w">
                                <li onClick={() => location.pathname === '/crew'} className={"pad-tb-2-5r tr-a-03s-ea" + (location.pathname === '/crew' ? ' active-nav' : ' inactive-nav')}><b>02</b> CREW</li>
                            </Link>

                            <Link to="/technology" className="color-w">
                                <li onClick={() => location.pathname === '/technology'} className={"pad-tb-2-5r tr-a-03s-ea" + (location.pathname === '/technology' ? ' active-nav' : ' inactive-nav')}><b>03</b> TECHNOLOGY</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header