import consol from '../assets/steamdeck.svg'
import '../index.css';

export function Console(on){

    on = false
    if(on){
        consol.log("Экран")
    }
    else{
        return (
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={consol} alt="steamdeck"/>
        )
    }
}