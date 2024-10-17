import React from "react";
import '../index.css';
import backoff from '../assets/background_off.svg';
import backon from '../assets/background_on.svg';
import { Console } from "./Console.jsx";
import { useConsole } from './ConsoleContext';

export function Background() {
    const { isConsoleOn } = useConsole();

    const background = isConsoleOn ? backon : backoff;

    return (
        <div
            className='h-full w-full bg-auto-size absolute'
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Console />
        </div>
    );
}
