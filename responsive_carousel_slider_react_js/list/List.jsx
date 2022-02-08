import "./list.css";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";
import { useEffect } from "react";

const List = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [maxSlideNumber, setMaxSlideNumber] = useState(0);
    const [distance, setDistance] = useState(0);
    const listRef = useRef();

    const handleClick = ( direction ) => {

        // We get width of window ( 100 - padding of arrows ) divide by (230 - width of and list element) minus 1 ( gives % of width that was not shown from 1 element ) % 1 - gives only decimal like ".32"
        // console.log( ~~(( 1 - ( ( window.innerWidth - 100) / 230 ) % 1) * 230)  )
        let elementWidth = 230;

        if (slideNumber === maxSlideNumber - 1) {
            elementWidth = (~~(( 1 - ( ( window.innerWidth - 100) / 230 ) % 1) * 230) + 60);
        } else {
            elementWidth = 230;
        }

        if(direction === "left" && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${distance + elementWidth}px)`
            setSlideNumber( slideNumber - 1 )
            setDistance( distance + elementWidth )
        }
        if(direction === "right" && slideNumber < maxSlideNumber) {
            if(slideNumber === maxSlideNumber - 1) {
                listRef.current.style.transform = `translateX(${distance - elementWidth}px)`
                setSlideNumber( slideNumber + 1 )
                setDistance( distance - elementWidth )
            } else {
                listRef.current.style.transform = `translateX(${distance - elementWidth}px)`
            }
            setSlideNumber( slideNumber + 1 )
            setDistance( distance - elementWidth )
        }
    }

    useEffect(() => {
        setMaxSlideNumber(listRef.current.children.length - ~~((window.innerWidth - 100) / 230));
    }, [])

    return (
        <div className="list">
            <span className="listTitle">Countinue to watch</span>
            <div className="wraper">
                <ArrowBackIosOutlined 
                    className="sliderArrow left" 
                    onClick={ () => handleClick('left') }
                    style={{opacity: slideNumber > 0 ? 1 : 0, cursor: slideNumber > 0 ? "pointer" : "initial" }}
                />
                    <div className="container" ref={listRef}>
                        <ListItem text={'1'} />
                        <ListItem text={'2'} />
                        <ListItem text={'3'} />
                        <ListItem text={'4'} />
                        <ListItem text={'5'} />
                        <ListItem text={'6'} />
                        <ListItem text={'7'} />
                        <ListItem text={'8'} />
                        <ListItem text={'9'} />
                        <ListItem text={'10'} />
                    </div>
                <ArrowForwardIosOutlined 
                className="sliderArrow right" 
                onClick={ () => handleClick('right') }
                style={{opacity: slideNumber < maxSlideNumber ? 1 : 0, cursor: slideNumber < maxSlideNumber ? "pointer" : "initial" }}
                />
            </div>
        </div>
    )
}

export default List;