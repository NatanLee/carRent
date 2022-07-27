import { useState } from 'react';
import './Question.sass';

const Question = (props) => {
    
    const [phoneError, setphoneError] = useState("");
    const [emailError, setemailError] = useState("");
    const [questionError, setquestionError] = useState("");
    const [validation, setValidation] = useState(false);

    function preventAllActions(e){
        e.stopPropagation();
    }

    function phoneValidate(phone){
        let redexp = /\d+/;
        //console.log('test',phone, redexp.test(phone))
        if(redexp.test(phone)) return false;        
        return "Проверьте правильность вводимого номера телефона";
    }

    function emailValidate(email){
        let redexp = /\w+/i;
        //console.log('test',email, redexp.test(email))
        if(redexp.test(email)) return false;
        return "Проверьте правильность почтового адреса";
    }

    function questionValidate(question){
        let redexp = /\w+/i;
        if(redexp.test(question)) return false;
        return "Запрос не может быть пустым";
    }

    function writeQuestion(phone, email, question) {
        console.log(phone, email, question);

    }

    function handleSubmit(e){
        e.preventDefault();
        let form = e.target;
        let phone = form.phone.value;
        let email = form.email.value;
        let question = form.question.value;
        let validationStatus = true;

        if(phoneValidate(phone)) {            
            setphoneError(phoneValidate(phone));
            validationStatus = false;
        }else{
            setphoneError("");
        };
        if(emailValidate(email)) {
            setemailError(emailValidate(email));
            validationStatus = false;            
        }else{
            setemailError("");
        };
        if(questionValidate(question)) {
            setquestionError(questionValidate(question));
            validationStatus = false;  
        }else{
            setquestionError("");
        }; 

        //console.log(question);
        if(validationStatus){
            writeQuestion(phone, email, question);
            props.clickHandler();
        }        
    }
    
    return (
        <div className="Question" onClick={props.clickHandler}>
            
            <div className="block" onClick={preventAllActions} >
                <h1>Задайте вопрос</h1>
                <form onSubmit={handleSubmit}>
                    <p>Ваш телефон</p>                    
                    <input type="tel" name="phone"/>
                    {phoneError ? <p>{phoneError}</p> : null}
                    <p>Ваш e-mail</p>
                    <input type="email" name="email"/>
                    {emailError ? <p>{emailError}</p> : null}

                    <p>Ваш вопрос</p>
                    <textarea name="question"></textarea>
                    {questionError ? <p>{questionError}</p> : null}
                    <input type="submit" value="Отправить"/>
                </form>
            </div>

        </div>
    )
}

export default Question;