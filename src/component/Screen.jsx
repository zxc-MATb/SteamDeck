import React, { useState } from 'react';
import avatar from '../assets/user.svg';
import iconSettings from '../assets/icon settings.svg';
import gamefull from '../assets/game MK 1 fullscreeen.svg';
import {Achievement} from "./Classes/Achivements.js";
import {User} from "./Classes/User.js";
import {Friends} from "./Classes/Friends.js";

export function Screen() {
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [gameInfo, setGameInfo] = useState(null);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [windows, setWindows] = useState([]);

    //Создание пользователя
    const currentUser = new User(1, 'Anamarana','anamanara@gmail.com','******', 100);

    //Добавление друзей
    const userFriends = new Friends();
    userFriends.addFriend({ id: 1, username: 'Friend1' });
    userFriends.addFriend({ id: 2, username: 'Friend2' });
    userFriends.addFriend({ id: 3, username: 'Friend3' });

    //Подсчет друзей
    const yourFriend = userFriends.friendsList.length

    const myAchievements = [
        new Achievement(1, "First Steps", "Complete the tutorial.", true),
        new Achievement(2, "Master Explorer", "Visit all locations.", false),
        new Achievement(2, "Master Explorer", "Visit all locations.", false)
    ];

    // Функция для подсчета завершенных и общего количества достижений
    const getAchievementStats = (achievements) => {
        const total = achievements.length; // Общее количество достижений
        const completed = achievements.filter(achievement => achievement.isCompleted).length; // Подсчет завершенных достижений
        return { total, completed };
    };
    const { total, completed } = getAchievementStats(myAchievements);

        const games = [
            {title: "Mortal Kombat 1", releaseDate: "2023-09-14", time: "10:00",},
            {title: "Mortal Kombat 1", releaseDate: "2023-09-14", time: "10:00", achievements: 100},
            {title: "Mortal Kombat 1", releaseDate: "2023-09-14", time: "10:00", achievements: 100},
        ];

        const consoleInfo = {
            title: "Steam Deck",
            hasGaranty: true,
            ports: {
                HDMI: 2,
                USB: 4,
                Ethernet: 1,
            },
            system: {
                fps: 60,
                Hz: 120,
                isHDR: true,
                remotePlay: true,
                dolbyAtmosSound: true,
            }
        };

        const handleDivClick = (index) => {
            if (selectedDiv === index) {
                setGameInfo(games[index]);
            } else {
                const newWindow = {
                    id: windows.length,
                    image: gamefull,
                };
                setWindows([...windows, newWindow]);
                setSelectedDiv(index);
                setGameInfo(null);
            }
        };

        const handleCloseGameInfo = () => {
            setGameInfo(null);
        };

        const handleSettingsClick = () => {
            setSettingsOpen(!settingsOpen);
            setGameInfo(null);
        };

        return (
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray'>
                <div className='flex items-start justify-start space-x-5 mt-[24px]'>
                    <div className='flex'>
                        <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar"/>
                        <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                    </div>

                    <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                    <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance}</p>
                    <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                        <img className='ml-[180px] mr-[10px]' src={iconSettings} alt="Settings"/>
                        <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                    </div>
                </div>
                <div className='w-[480px] ml-[56px] mt-[19px] flex'>
                    {[0, 1, 2].map((_, index) => (
                        <div
                            key={index}
                            className={`h-[233px] ${selectedDiv === index ? 'w-[350px]' : 'w-[200px]'} bg-auto-size transition-all duration-300 ${index < 2 ? 'mr-2.5' : ''}`}
                            style={{
                                backgroundImage: `url(${gamefull})`,

                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            onClick={() => handleDivClick(index)}
                        >
                        </div>
                    ))}
                </div>

                {gameInfo && (
                    <div
                        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray shadow-lg z-10'>
                        <div className='flex items-start justify-start space-x-5 mt-[24px]'>
                            <div className='flex'>
                                <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar"/>
                                <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                            </div>

                            <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                            <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance}</p>
                            <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                                <img className='ml-[180px] mr-[10px]' src={iconSettings} alt="Settings"/>
                                <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div
                                className={`h-[233px] w-[300px] ml-[45px] mt-[15px] bg-auto-size transition-all duration-300`}
                                style={{
                                    backgroundImage: `url(${gamefull})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                            </div>
                            <div>
                                <p className='text-left mt-[12px] ml-[24px] text-2xl font-kantumruy text-gray-50'> {gameInfo.title}</p>
                                <p className='text-left mt-[12px] ml-[24px] text-base font-kantumruy text-gray-50'> {gameInfo.releaseDate}</p>
                                <p className='text-left mt-[12px] ml-[24px] text-base font-kantumruy text-gray-50'>Time: {gameInfo.time}</p>
                                <p className='text-left mt-[12px] ml-[24px] text-base font-kantumruy text-gray-50'>Achievements: {completed}/{total}
                                </p>

                            </div>
                        </div>
                        <button
                            className="bg-white text-black p-2 rounded mt-10"
                            onClick={handleCloseGameInfo}>Закрыть
                        </button>
                    </div>
                )}

                {settingsOpen && (
                    <div
                        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray'>
                        <div className='flex items-start justify-start space-x-5 mt-[24px]'>
                            <div className='flex'>
                                <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar"/>
                                <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                            </div>

                            <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                            <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance}</p>
                            <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                                <img className='ml-[180px] mr-[10px]' src={iconSettings} alt="Settings"/>
                                <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                            </div>
                        </div>
                        <h2 className='font-kantumruy text-base text-gray-50 mt-[15px]'>Настройки</h2>

                        <p className='font-kantumruy text-base text-gray-50'>Title: {consoleInfo.title}</p>
                        <p className='font-kantumruy text-base text-gray-50'>Has
                            Warranty: {consoleInfo.hasGaranty ? 'Да' : 'Нет'}</p>
                        <p className='font-kantumruy text-base text-gray-50'>Ports:</p>
                        <ul className='font-kantumruy text-gray-50'>
                            {Object.entries(consoleInfo.ports).map(([port, count]) => (
                                <li key={port}>{port}: {count}</li>
                            ))}
                        </ul>

                        <p className='font-kantumruy text-base text-gray-50'>System:</p>
                        <ul className='font-kantumruy text-gray-50'>
                            <li>FPS: {consoleInfo.system.fps}</li>
                            <li>Hz: {consoleInfo.system.Hz}</li>
                            <li>HDR Support: {consoleInfo.system.isHDR ? 'Да' : 'Нет'}</li>
                            <li>Remote Play: {consoleInfo.system.remotePlay ? 'Да' : 'Нет'}</li>
                            <li>Dolby Atmos Sound: {consoleInfo.system.dolbyAtmosSound ? 'Да' : 'Нет'}</li>
                        </ul>

                        <button onClick={handleSettingsClick} className="bg-white text-black p-2 rounded mt-5">Закрыть
                            настройки
                        </button>
                    </div>
                )}
            </div>
        );
}

