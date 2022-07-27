import React, { useState } from "react";
import Question from "../../Question/Question";
import './Header.sass';


const Header = (props) =>{
    
    const [QuestionIsOpen, setQuestionIsOpen] = useState(false);
    
    function clickHandler() {
        setQuestionIsOpen(!QuestionIsOpen);
        //document.body.style.overflow = QuestionIsOpen ? "visible" : "hidden";
        overflowHandler();
    }    
    
    function overflowHandler(){
        document.body.style.overflow = QuestionIsOpen ? "visible" : "hidden";
        //document.body.style.overflow ="hidden";
        //console.log('kkk');
    }
    
    return(
        <>
        <header>
            <div className = "Header">
                <div className = "first-line">                
                    <a href="/" className="logo">                        
                        <p>Matiz co</p>
                        <p>автопрокат</p>                        
                    </a>                    
                    <div className = "slogan">                        
                        <p>Аренда автомобилей в Челябинске</p>
                        <p>Аренда автомобиля дешево</p>
                    </div>                    
                    <button class = "button" onClick={clickHandler}>Задать вопрос</button>
                </div>
            </div>
        </header>
        {QuestionIsOpen ? <Question clickHandler={clickHandler}/> : null}
        </>
    )
}


export default Header;