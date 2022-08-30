import { useState } from 'react';
import './Question.sass';

const Question = (props) => {
    let startTimer = 5;

    const [phoneError, setphoneError] = useState("");
    const [emailError, setemailError] = useState("");
    const [questionError, setquestionError] = useState("");
    const [formSended, setFormSended] = useState(false);
    const [count, setCount] = useState(startTimer);

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
        if(question.trim) return false;
        return "Запрос не может быть пустым";
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
            setFormSended(true);
            timerToCloseBlock();
            //props.clickHandler();
        }        
    }

    function timerToCloseBlock(){
        let stTimer = startTimer;
        let timer = setInterval(()=>{
            stTimer--;
            setCount(stTimer);
            //console.log(stTimer);
            if(!stTimer){
                clearInterval(timer);
                //console.log('stop');
                props.clickHandler();
            } 
        }, 1000);
    }


    function writeQuestion(phone, email, question) {
        console.log(phone, email, question);

        fetch('/api/cars/setQuestion', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            },
            body: JSON.stringify({phone, email, question})
        });

    }


    
    return (
        <div className="Question" onClick={props.clickHandler}>
            {!formSended &&
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
                    <div className='actionButtons'>
                        <input type="submit" value="Отправить"/>
                        <button onClick={props.clickHandler}>Отмена</button>
                    </div>
                    
                </form>
            </div>
            }
            {formSended &&
                <div className='afterBlock'>
                    <p>Ваш вопрос получен</p>
                    <p>Ответим Вам в ближайшее время</p>
                    <button>OK({count})</button>
                </div>
                
            }

        </div>
    )
}

export default Question;