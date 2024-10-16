import React from 'react';
import crosspiece from '../assets/button crosspiece.svg';
import view from '../assets/button view.svg';
import steam from '../assets/button steam.svg';
import speed_access from '../assets/button speed access.svg';
import settings from '../assets/button settings.svg';
import buttonX from '../assets/button х.svg'
import buttonY from '../assets/button y.svg'
import buttonA from '../assets/button a.svg'
import buttonB from '../assets/button b.svg'
import '../component/Screen.jsx'


const handleClick = (buttonName) => (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;

    console.log(`Кнопка: ${buttonName}`);
    console.log(`offsetX: ${offsetX}, offsetY: ${offsetY}`);
    console.log(`centerX: ${centerX}, centerY: ${centerY}`);

    const deltaX = offsetX - centerX;
    const deltaY = offsetY - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Горизонтальное направление
        if (deltaX > 0) {
            console.log(`Кликнули вправо на ${buttonName}`);
        } else {
            console.log(`Кликнули влево на ${buttonName}`);
        }
    } else {
        // Вертикальное направление
        if (deltaY > 0) {
            console.log(`Кликнули вниз на ${buttonName}`);
        } else {
            console.log(`Кликнули вверх на ${buttonName}`);
        }
    }
};

function On_Off (){

}

export function Buttons() {
    return (
        <>
            <div className='ml-[220px] mt-[161px] flex w-[1470px] h-[600px]'>
                <div className='fixed mr-[860px] w-[300px] h-[400px] '>
                    <img
                        className='w-[137px] h-[125px] fixed top-[22.5vh] left-[12.5vw] cursor-pointer'
                        src={crosspiece}
                        alt='Crosspiece'
                        onClick={handleClick('Crosspiece')}
                    />
                    <img
                        className='fixed top-[21vh] left-[18.7vw] cursor-pointer'
                        src={view}
                        alt='View'
                        onClick={handleClick('View')}
                    />
                    <img
                        className='fixed top-[61.2vh] left-[22.5vw] cursor-pointer'
                        src={steam}
                        alt='Steam'
                        onClick={handleClick('Steam')}
                    />
                </div>
                <div>
                    <img
                        className='fixed top-[61.2vh] left-[72.9vw] cursor-pointer'
                        src={speed_access}
                        alt='SpeedAccess'
                        onClick={handleClick('SpeedAccess')}
                    />
                    <img
                        className='fixed top-[21.2vh] left-[78.2vw] cursor-pointer'
                        src={settings}
                        alt='Settings'
                        onClick={handleClick('Settings')}
                    />
                    <div className='flex fixed top-[20vh] left-[80.2vw]'>
                        <img
                            className='fixed top-[26.7vh] left-[80.4vw] cursor-pointer'

                            src={buttonX}
                            alt='ButtonX'
                            onClick={handleClick('ButtonX')}
                        />
                        <img
                            className='fixed top-[21.7vh] left-[82.5vw] cursor-pointer'
                            src={buttonY}
                            alt='ButtonY'
                            onClick={handleClick('ButtonY')}
                        />
                        <img
                            className='fixed top-[26.3vh] left-[84.8vw] cursor-pointer'
                            src={buttonB}
                            alt='ButtonB'
                            onClick={handleClick('ButtonB')}
                        />
                        <img
                            className='fixed top-[31.2vh] left-[82.5vw] cursor-pointer'
                            src={buttonA}
                            alt='ButtonA'
                            onClick={handleClick('ButtonA')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
