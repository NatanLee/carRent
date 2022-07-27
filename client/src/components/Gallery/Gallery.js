import React, { useEffect, useState } from 'react';
import './Gallery.sass';


const Gallery = (props) => {
    const [carimgs, setCarimgs] = useState([]);

    async function getImgNames(carId){
        //console.log(carId)
        let response = await fetch('/api/cars/getImgNames', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json;charset=utf-8'
            },
            body: JSON.stringify({carId: carId})
        });
        if (response.ok) { // если HTTP-статус в диапазоне 200-299          
            const imgnames = await response.json();
            //console.log('imgnames', imgnames);         
            setCarimgs(imgnames);           
        } else {
          console.log("Ошибка HTTP: " + response.status);
        }         
    }

    function html(imgNames) {
        let html = imgNames.map((imgName) => {
            return(
                <p><img key={imgName} src={require(`../../gallery/${props.carId}/${imgName}`).default} alt={imgName} /></p>
            )
        })
        return html;
    }

    const imgs = html(carimgs);


    useEffect(() => {
        getImgNames(props.carId);
    }, [])

    return (
        <div className='Gallery'>
            <h2>Галерея</h2>
            <div className='images'>
                {imgs}
            </div>
        </div>
    );
}

export default Gallery;