import backoff from '../assets/background_off.svg';
import backon from '../assets/background_on.svg';

export function Background(){
    const on = true;
    const background = (on) ? backon : backoff;
    return(
        <img className='absolute' src={background} alt='Background'></img>
    )
}