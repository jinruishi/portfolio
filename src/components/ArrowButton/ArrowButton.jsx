import React from 'react';
import {useState} from 'react';
import styles from './ArrowButton.module.css';
import {useNavigate} from 'react-router';

function ArrowButton({className, direction, route}) {
    let navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const [isClicked, setIsClicked] = useState(false);
    const handleMouseDown = () => {
        setIsClicked(true);
    };
    const handleMouseUp = () => {
        setIsClicked(false);
        // let the animation complete first before navigating
        setTimeout(() => navigate(route), 50);
    };


    let backgroundClass = (() => {
        if (isClicked) {
            return styles.backgroundClicked;
        } else if (isHovered) {
            return styles.backgroundHovered;
        } else {
            return styles.backgroundDefault;
        }
    })();

    let foregroundClass = (() => {
        if (isClicked) {
            return styles.foregroundClicked;
        } else if (isHovered) {
            return styles.foregroundHovered;
        } else {
            return styles.foregroundDefault;
        }
    })();

    let arrowClass = (() => {
        if (isClicked) {
            return styles.arrowClicked;
        } else if (isHovered) {
            return styles.arrowHovered;
        } else {
            return styles.arrowDefault;
        }
    })();

    let arrow;
    if (direction === 'left') {
        arrow =
            <svg className={arrowClass}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 -960 960 960">
                <path
                    d="m294.92-450 227.85 227.85L480-180 180-480l300-300 42.77 42.15L294.92-510H780v60H294.92Z"/>
            </svg>;
    } else {
        arrow = <svg className={arrowClass} xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 -960 960 960">
            <path
                d="M684.16-454.87H180v-50.26h504.16L444.67-744.61 480-780l300 300-300 300-35.33-35.39 239.49-239.48Z"/>
        </svg>;
    }


    return (
        <div className={`${styles.arrowButtonContainer} ${className}`}>
            <div className={backgroundClass}/>
            <div className={foregroundClass}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
            />
            {arrow}
        </div>
    );

}

export default ArrowButton;