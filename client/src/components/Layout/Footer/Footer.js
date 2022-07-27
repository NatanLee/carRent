import React from "react";
import Menu from "../../Menu/Menu";
import './Footer.sass';

const Bottom = (props) => {
    
    
    return (
        <>
        {/* <Menu menuLinks = {props.menuLinks} /> */}
        <footer className="Footer">            
            <div className="wrapper">
                <div>
                    <p>Информация на данном сайте носит исключительно ознакомительный характер и не является публичной офертой</p>
                    <p>Прочитайте условия договора разделе "Документы"</p>
                </div>            
                <p className="yaar">MatizCO © 2022</p>
            </div>
        </footer>
        </>
    )
}

export default Bottom;