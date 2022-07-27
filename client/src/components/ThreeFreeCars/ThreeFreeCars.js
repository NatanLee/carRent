import React from 'react';
import { NavLink } from 'react-router-dom';
import CarMiniCard from '../CarMiniCard/CarMiniCard';
import './ThreeFreeCars.sass';


class ThreeFreeCars extends React.Component {
    constructor(props){
        super(props);
        this.getThreeFreeCars = this.getThreeFreeCars.bind(this);
        this.state = {
            cars: []
        }        
    }
//получаем инфо обо всех машинах
    async getThreeFreeCars(){
        let resp = await fetch('/api/cars/getThreeFreeCars');
        
        if (resp.ok) { // если HTTP-статус в диапазоне 200-299          
            const allCars = await resp.json();
   
            this.setState({
                cars: allCars
            });          
        } else {
          console.log("Ошибка HTTP: " + resp.status);
        } 
    }

    componentDidMount(){
        this.getThreeFreeCars();
    }
    
    render() {        
        return (                     
            <div className = "ThreeFreeCars">
                {this.state.cars.length === 0 &&
                    <div className='title'>Посмотрите все наши машины в <a href="/cars">каталоге</a></div>
                }
                {this.state.cars.length > 0 &&
                    <>
                        <h2 className='title'>Самые дешевые свободные машины сейчас</h2>
                        <div className='cars'>
                            {this.state.cars.map((car, index) => {
                                return (
                                    <NavLink key={car.id} className="CarMiniCard" to={`/cars/${car.id}`}>
                                        <CarMiniCard carInfo={car} />
                                    </NavLink>
                                );
                            })}
                        </div>
                    </>
                }
            </div> 
        )
    }
}


export default ThreeFreeCars;