import React from "react";
import './CarMiniCard.sass';


const CarMiniCard = (props) => {
    let carStatus = "Сделайте запрос";
    
    if(props.carInfo.status === "reserve") {carStatus = "Бронь"}
    else if(props.carInfo.status === "buzy") {carStatus = "Занят"}
    else if(props.carInfo.status === "free") {
        carStatus = "от 500 руб.";//тут должно приходить от базы
    }
    //console.log(props.carInfo.img)
    return(
        <>
            <h3 className="carName">{props.carInfo.name}</h3>

            {/* <p className="carImg"><img src={props.carInfo.img} /></p> */}
            <p className="carImg"><img src={require(`../../gallery/${props.carInfo.id}/main.webp`).default} alt={props.carInfo.name}/></p>

            <div className="info">
                <p>{props.carInfo.year} год</p>
                <p>{props.carInfo.transmission === "MT" ? null : " / АКПП"}</p>
                <p>{props.carInfo.airConditioner ? " / Кондиционер" : null}</p>
            </div>
            <div className="status">
                <p className={props.carInfo.status}>{carStatus}</p>
                <p className="button">Подробнее</p>
            </div>
        </>
    )
}

export default CarMiniCard;