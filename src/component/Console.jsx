import React from 'react';
import consol from '../assets/steamdeck.svg';
import '../index.css';
import { Buttons } from "./Buttons.jsx";
import { Screen } from "./Screen.jsx";
import { useConsole } from './ConsoleContext';

export function Console() {
    const { isConsoleOn } = useConsole();

    return (
        <div>
            <img
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                src={consol}
                alt="steamdeck"
            />
            {isConsoleOn && <Screen />}
            <Buttons />
        </div>
    );
}
