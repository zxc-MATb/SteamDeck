import React from 'react';
import avatar from '../assets/user.svg'
import iconSettings from '../assets/icon settings.svg'

export function Screen(on){

    let count = 0
    let balance = 0
    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray'>
            <div className='flex items-start justify-start space-x-8 mt-[24px]'>
                <div className='flex'>
                    <img className='ml-[56px] mr-[10px]' src={avatar}/>
                    <p className='font-kantumruy text-base text-gray-50'>User</p>
                </div>

                <p className='font-kantumruy text-base text-gray-50'>Friend:{count}</p>
                <p className='font-kantumruy text-base text-gray-50'>Friend:{balance}</p>
                <div className='flex ]'>
                    <img className='ml-[200px] mr-[10px]' src={iconSettings}/>
                    <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                </div>
            </div>
            <div>
            </div>
            <div className='flex'>
                <div className='h-[233px'></div>
                <div className='h-[233px'></div>
                <div className='h-[233px'></div>
            </div>
        </div>
    )
}