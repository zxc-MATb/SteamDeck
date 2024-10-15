import consol from '../assets/steamdeck.svg'
import '../index.css';
import {Buttons} from "./Buttons.jsx";
import {Screen} from "./Screen.jsx";

export function Console(on){

    on = false
    if(on){
        consol.log("Экран")
        let button_On_Off = 'On';

    }
    else{
        let button_On_Off = 'Off';
        return (
            <>
                <div>
                    <p className='absolute fixed font-kantumruy text-2xl text-amber-50 mt-[137px] ml-[889px]'>{button_On_Off}</p>
                    <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={consol} alt="steamdeck"/>
                    <Screen/>
                    <Buttons/>
                </div>
            </>
        )
    }
}