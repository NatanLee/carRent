import React from 'react';
import { Component } from 'react';
import Header from './Header/Header';
import Menu from '../Menu/Menu';
import Slider from '../Slider/Slider';
import Footer from './Footer/Footer';


const мenuLinks = [
    {name: "Главная", link: "/"},
    {name: "Все машины", link: "/cars"},
    {name: "Условия аренды", link: "/terms"},
    {name: "Документы", link: "/documents"},
    {name: "Контакты", link: "/contacts"}
];


class Layout extends Component {

    render() {
        return (
            <>
                <Header />
                <Menu menuLinks={мenuLinks}/>                                
                <main>
                    {this.props.children}
                </main>
                <Footer menuLinks={мenuLinks}/>
            </>
        )
    }
}

export default Layout;