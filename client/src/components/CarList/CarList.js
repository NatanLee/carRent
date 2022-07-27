import React from 'react';
import { NavLink } from 'react-router-dom';
import CarMiniCard from '../CarMiniCard/CarMiniCard';
import './CarList.sass';


class CarList extends React.Component {
    constructor(props){
        super(props);
        this.getCars = this.getCars.bind(this);
        this.state = {
            cars: []
        }
        this.getCars();
    }
//получаем инфо обо всех машинах
    async getCars(){
        let resp = await fetch('/api/cars/getAllCars');
        
        if (resp.ok) { // если HTTP-статус в диапазоне 200-299          
            const allCars = await resp.json();
   
            this.setState({
                cars: allCars
            });          
        } else {
          console.log("Ошибка HTTP: " + resp.status);
        } 
    }
    
    render() {        
        return (
            <div className = "CarList">
                {this.state.cars.map((car, index) => {
                    return (
                        <NavLink key = {car.id} className="CarMiniCard" to={`/cars/${car.id}`}>
                            <CarMiniCard carInfo = {car} />
                        </NavLink>
                    )
                })}
            </div>
        )
    }
}


export default CarList;