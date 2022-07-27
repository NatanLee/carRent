import React from "react";
import { NavLink } from "react-router-dom";
import { Component } from "react/cjs/react.development";
import './Menu.sass';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.menuLinks = this.props.menuLinks;
        this.toggleMenu = this.toggleMenu.bind(this);        
        this.closeBackplate = this.closeBackplate.bind(this);        
        this.isOpen = false;
        this.state = {isOpen: false};
    }

    renderLinks(links) {
        return (links.map((link, index) => {
            return (
                <li key = {index}>
                    <NavLink onClick = {this.closeBackplate} to = {link.link}>{link.name}</NavLink>
                </li>
            )
        }))
    }     
    toggleMenu() {
        this.setState({isOpen: !this.state.isOpen});        
    }

    closeBackplate(){
        this.setState({isOpen: false});
    }

    render() {
        //console.log(this.props.menuLinks)
        let icls = ["fa"];
        let menuCls = ["Menu"];
        let backplateCls = ["Menu", "backplate"];
        if(this.state.isOpen){
            icls.push("fa-times");
            menuCls.push("open");
            backplateCls.push("open");
            document.body.style.overflow = "hidden";
        }else{
            icls.push("fa-bars");
            document.body.style.overflow = "visible";
        }
        return(
            <>
            <nav className={menuCls.join(' ')}>
                <div className="MenuToggle"><i onClick={this.toggleMenu} className={icls.join(' ')}/></div>
                <ul>
                    {this.renderLinks(this.menuLinks)}
                </ul>
                
            </nav>
            <div onClick = {this.toggleMenu} className={backplateCls.join(' ')}></div>
            </>
        )
    }
}

export default Menu;