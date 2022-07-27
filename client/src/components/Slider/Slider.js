import React from 'react';
import { Component } from 'react/cjs/react.development';
import './Slider.sass';

import slide1 from './img/1.jpg';
import slide2 from './img/2.jpg';
import slide3 from './img/3.jpg';
import slide4 from './img/4.jpg';
import slide5 from './img/5.jpg';
import slide6 from './img/6.jpg';


const slides = [
    {img: slide1, text: "Экономичные машинки"},
    {img: slide2, text: "Надежность на высшем уровне, ремонтируем сами"},
    {img: slide3, text: "Созданы для города"},
    {img: slide4, text: "Обслужены по высшему классу"},
    {img: slide5, text: "Не кот в мешке, отвечем"},
    {img: slide6, text: "Вам понравится"}
]


class Slider extends Component {
    constructor (props) {
        super(props);
        this.windowSize = window.innerWidth;
        this.state = {
            windowSize: window.innerWidth,
            activeIndex: 0,
            topImgClass: ['overlayeddd'],
            bottomImgClass: ['transparenttt']
          }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.timerId = setInterval(
            () => this.tickSlider(), 7000
        );
        

    }
    componentWillUnmount() {
        window.addEventListener("resize", null);
        clearInterval(this.timerId);
    }
    handleResize() {
        this.setState({windowSize: window.innerWidth})
    }

    tickSlider() {
        const next = this.state.activeIndex === slides.length - 1 ? 0 : this.state.activeIndex + 1;
        
        this.setState({
            activeIndex: next,
            topImgClass: ['overlayed'],
            bottomImgClass: ['transparent']            
        });
        
        setTimeout(() => {
            //console.log(this.state.activeIndex);
            this.setState({
                topImgClass: ['transparent'],
                bottomImgClass: ['overlayed']
            })
        }, 1000)

        setTimeout(() => {
            //console.log(this.state.activeIndex);
            this.setState({
                topImgClass: [],
                
            })
        }, 2000)
        //const prevImgIndex = this.state.activeIndex ? this.state.activeIndex - 1 : this.state.slides.length - 1;
// Вычисляем индекс следующего слайда
        //const nextImgIndex = this.state.activeIndex === this.state.slides.length - 1 ? 0 : this.state.activeIndex + 1;
        //console.log(prevImgIndex, this.state.activeIndex, nextImgIndex);

    }

   

    renderImgs() {
        console.log(this.state.windowSize)
        
// Вычисляем индекс следующего слайда
        //const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
        return (
            slides.map((img, index) => {
                return(
                    <div className = {this.state.topImgClass.join(' ')} key = {index} >
                        <img style={{width: this.state.windowSize}} src = {img.img} />
                    </div>
                    
                );
            }

            )
        )
    }
    
    
    render() {

        const prevImg = this.state.activeIndex ? this.state.activeIndex - 1 : slides.length - 1;
        const activeImg = this.state.activeIndex;


        return (
            <div className='Slider'>
                 <div className = {this.state.topImgClass.join(' ')}>
                    <img style={{width: this.state.windowSize}} src = {slides[prevImg].img} />
                </div>
                {/*следующй слайд */}     
                <div className = {this.state.bottomImgClass.join(' ')}>
                    <img style={{width: this.state.windowSize}} src = {slides[activeImg].img} />
                </div>       
            </div>
        )
    }
}

export default Slider;