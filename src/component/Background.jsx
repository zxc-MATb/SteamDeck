import '../index.css';
import backoff from '../assets/background_off.svg';
import backon from '../assets/background_on.svg';
import {Console} from "./Console.jsx";

export function Background(){
    const on = false;
    const background = (on) ? backon : backoff;
    return(
        <div className='h-full w-full bg-auto-size absolute' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Console />
        </div>
    )
}