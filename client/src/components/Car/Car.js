import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import './Car.sass';

const Car = (props) => {
            
    const params = useParams();
    const carId = params.id;
    const [car, setCar] = useState(
        {
            id: "00",
            name: "загрузка",            
            year: "загрузка",
            transmission: "MT",
            airConditioner: "загрузка",
            drive: "загрузка"
        }
    );

    const [price, setPrice] = useState(
        {
            days1_3: "загрузка",
            days4_6: "загрузка",            
            days7_14: "загрузка",
            days15_: "загрузка"
        }
    );
   
    useEffect(() => {
        getCarInfo(carId);
    }, [])
    
    async function getCarInfo(carId){
        let resp = await fetch('/api/cars/getOneCar', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            },
            body: JSON.stringify({carId: carId})
        });
        
        if (resp.ok) { // если HTTP-статус в диапазоне 200-299          
            const oneCar = await resp.json();
            //console.log(oneCar);
            setCar(oneCar);
            getPrices(oneCar.rent_class);
            
            //console.log(carId);
             
        } else {
          console.log("Ошибка HTTP: " + resp.status);
        } 
    }

    async function getPrices(carClass) {
        //console.log('carclass', carClass)
        let response = await fetch('/api/cars/getPrice', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            },
            body: JSON.stringify({carClass: carClass})
        });
        if (response.ok) { // если HTTP-статус в диапазоне 200-299          
            const carPrice = await response.json();
            //console.log('carprice', carPrice)           
            setPrice(carPrice);           
        } else {
          console.log("Ошибка HTTP: " + response.status);
        } 

    }
         
    return (        
        <>        
        <div className="Car">
            <h1>{car.name}</h1>
            <div className="carInfo">
                <div className="images">
                    {console.log(require(`../../gallery/${car.id}/main.webp`).default)}
                    <img src={require(`../../gallery/${car.id}/main.webp`).default} alt={car.name}/>
                </div>
                <div className="textInfo">
                    <div>
                        <h2>Характеристики</h2>
                        <div className="characteristic">
                            <p>Год выпуска: <span>{car.year}</span></p>
                            <p>Коробка передач: <span>{car.transmission = "MT" ? "Механическая" : "Автоматическая"}</span></p>
                            <p>Кондиционер: <span>{car.airConditioner ? "Есть" : "Нет"}</span></p>
                            <p>Привод: <span>{car.drive[0].toUpperCase() + car.drive.slice(1)}</span></p>
                        </div>                    
                    </div>
                    <div>
                        <h2>Условия аренды</h2>
                        <div className="condition">
                            <p>Стаж водителя:<span>1 год</span></p>
                            <p>Возвраст водителя:<span>от 20 лет</span></p>
                            <p>Депозит:<span>5 000 руб.</span></p>
                        </div>
                        
                    </div>
                    <div className="pricesWrapper">
                        <h2>Стоимость аренды</h2>
                        <div className="prices">
                            <p>1-3 дня<span>{price.days1_3} руб.</span></p>
                            <p>4-6 дня<span>{price.days4_6} руб.</span></p>
                            <p>7-14 дня<span>{price.days7_14} руб.</span></p>
                            <p>от 15 дней<span>{price.days15_} руб.</span></p>                            
                        </div>
                        <button>Оставить заявку</button>
                    </div>       
                </div>
            </div>            
        </div> 
        <Gallery carId={carId}/>
        </>       
    )
}

export default Car;