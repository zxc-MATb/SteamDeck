import consol from '../assets/steamdeck.svg'

export function Console(on){

    on = false
    if(on){
        consol.log("Экран")
    }
    else{
        return (
            <img src={consol} alt="steamdeck" />
        )
    }
}