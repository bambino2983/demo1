import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"
                    src="https://firebasestorage.googleapis.com/v0/b/zeus-4da70.appspot.com/o/logofinal.png?alt=media&token=83c805c0-1f2e-4334-9432-8b228209fad9"
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Juan</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon className="header__shoppingbasketIcon"/>
    <span className=""header__optionLineTwo header__basketCount>{basket?.length}</span>
                    </div>
                </Link>


            </div>

        </nav>
    )
}

export default Header
