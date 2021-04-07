import React, {Component} from 'react';
import { MenuItems } from "./MenuItems";
import './NavBar.css'
import { Button } from "../Button"

class NavBar extends Component {
    state = { clicked: false }

    handledClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="navBar-logo">React<i className="fab fa-react"></i></h1>

                <div className="menu-icon" onClick={this.handledClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className = {item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                <Button>Sign Up</Button>
            </nav>
            
        )
    }

}

export default NavBar