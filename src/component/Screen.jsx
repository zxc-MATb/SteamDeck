import React, { useState } from 'react';
import avatar from '../assets/user.svg';
import iconSettings from '../assets/icon settings.svg';
import gameMk from '../assets/game MK 1 fullscreeen.svg';
import gameST from '../assets/street fighter 6.svg';
import gameT7 from '../assets/Tekken 7.svg';
import { Achievement } from "./Classes/Achivements.js";
import { User } from "./Classes/User.js";
import { Friends } from "./Classes/Friends.js";
import { Game } from "./Classes/Games.js";
import {Settings} from "./Classes/Settings.js";
import {GameConsole} from "./Classes/GameConsole.js";



export function Screen() {
    const [selectedDiv, setSelectedDiv] = useState(null);
    const [gameInfo, setGameInfo] = useState(null);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    // Создание пользователя
    const currentUser = new User(1, 'Anamarana', 'anamanara@gmail.com', '******', 100);

    // Добавление друзей
    const userFriends = new Friends();
    userFriends.addFriend({ id: 1, username: 'Friend1' });
    userFriends.addFriend({ id: 2, username: 'Friend2' });
    userFriends.addFriend({ id: 3, username: 'Friend3' });

    // Подсчет друзей
    const yourFriend = userFriends.friendsList.length;

    const myAchievements = [
        new Achievement(1, "First Steps", "Complete the tutorial.", true),
        new Achievement(2, "Master Explorer", "Visit all locations.", false),
        new Achievement(3, "Master", "Visit all locations.", true),
        new Achievement(4, "Master Explorer", "Visit all locations.", false),
        new Achievement(5, "Master Explorer", "Visit all locations.", false),
    ];

    // Функция для подсчета завершенных и общего количества достижений
    const getAchievementStats = (achievements) => {
        const total = achievements.length; // Общее количество достижений
        const completed = achievements.filter(achievement => achievement.isCompleted).length; // Подсчет завершенных достижений
        return { total, completed };
    };
    const { total, completed } = getAchievementStats(myAchievements);

    const games = [
        new Game(1, 'Mortal Kombat 1', 'Fighting', 'NetherRealm Studios', 'NetherRealm Studios', '2023-09-14', 96, gameMk),
        new Game(2, 'Street Fighter VI', 'Fighting', 'Capcom', 'Capcom', '2023-06-02', 88, gameST),
        new Game(3, 'Tekken 7', 'Fighting', 'Bandai Namco', 'Bandai Namco', '2017-06-02', 87, gameT7)
    ];

    const settings = new Settings(50, 100, 'En');

    const steamDeck = new GameConsole('Steam Deck', true, { HDMI: 2, USB: 4, Ethernet: 1,}, {fps: 60, Hz: 120, isHDR: true, remotePlay: true, dolbyAtmosSound: true,});

    const handleDivClick = (index) => {
        if (selectedDiv === index) {
            setGameInfo(games[index]);
        } else {
            setSelectedDiv(index);
            setGameInfo(games[index]);
        }
    };

    const handleCloseGameInfo = () => {
        setGameInfo(null);
    };

    const handleSettingsClick = () => {
        setSettingsOpen(!settingsOpen);
    };

    const handleBrightnessChange = (event) => {
        const value = Math.min(100, Math.max(0, event.target.value)); // Обрезаем значение от 0 до 100
        setSettings({ ...settings, brightness: value });
    };

    const handleVolumeChange = (event) => {
        const value = Math.min(100, Math.max(0, event.target.value)); // Обрезаем значение от 0 до 100
        setSettings({ ...settings, volume: value });
    };

    const handleLanguageChange = (event) => {
        setSettings({ ...settings, language: event.target.value });
    };
    const handleInfoClick = () => {
        setInfoOpen(!infoOpen);
    };

    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray'>
            <div className='flex items-start justify-start space-x-3 mt-[24px]'>
                <div className='flex'>
                    <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar" />
                    <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                </div>

                <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance} coin</p>
                <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                    <img className='ml-[170px] mr-[10px]' src={iconSettings} alt="Settings" />
                    <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                </div>
            </div>

            <div className='w-[615px] ml-[56px] mt-[19px] flex'>
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        className={`h-[233px] ${selectedDiv === index ? 'w-[350px]' : 'w-[200px]'} transition-all duration-300 ${index < 2 ? 'mr-2.5' : ''}`}
                        style={{
                            backgroundImage: `url(${game.image})`,
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
                    <div className='flex items-start justify-start space-x-3 mt-[24px]'>
                        <div className='flex'>
                            <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar"/>
                            <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                        </div>
                        <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                        <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance} coin</p>
                        <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                            <img className='ml-[170px] mr-[10px]' src={iconSettings} alt="Settings" />
                            <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className={`h-[233px] w-[400px] ml-[57px] mt-[15px] bg-auto-size transition-all duration-300`} style={{
                            backgroundImage: `url(${gameInfo.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}></div>
                        <div>
                            <p className='text-left mt-[12px] ml-[24px] text-2xl font-kantumruy text-gray-50'>{gameInfo.title}</p>
                            <p className='text-left mt-[12px] ml-[24px] text-base font-kantumruy text-gray-50'>Release Date: {gameInfo.releaseDate}</p>
                            <p className='text-left mt-[12px] ml-[24px] text-base font-kantumruy text-gray-50'>Time: {gameInfo.spentHours}</p>
                            <p className='text-left mt-[12px] ml-[24px] text-base font-kantumruy text-gray-50'>Achievements: {completed}/{total}</p>
                        </div>
                    </div>
                    <button onClick={handleCloseGameInfo} className="bg-white text-black p-2 rounded mt-10">Закрыть игру</button>
                </div>
            )}

            {settingsOpen && (
                <div
                    className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray'>
                    <div className='flex items-start justify-start space-x-3 mt-[24px]'>
                        <div className='flex'>
                            <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar"/>
                            <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                        </div>
                        <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                        <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance} coin</p>
                        <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                            <img className='ml-[170px] mr-[10px]' src={iconSettings} alt="Settings"/>
                            <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                        </div>
                    </div>

                    <h2 className='font-kantumruy text-base text-gray-50 mt-[15px]'>Настройки</h2>
                    <h3 className='font-kantumruy text-base text-gray-50 mt-[15px]'>Настройки яркости, звука и
                        языка</h3>

                    <label className='block text-gray-50'>Яркость: {settings.brightness}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={settings.brightness}
                        onChange={handleBrightnessChange} className='w-1/3 bg-gray-200'
                    />

                    <label className='block text-gray-50 mt-2'>Громкость: {settings.volume}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={settings.volume}
                        onChange={handleVolumeChange}
                        className='w-1/3 bg-gray-200'
                    />

                    <label className='block text-gray-50 mt-2'>Язык:</label>
                    <select value={settings.language} onChange={handleLanguageChange} className='bg-gray-200'>
                        <option value="En">English</option>
                        <option value="Ru">Русский</option>
                    </select>

                    <button onClick={handleInfoClick}
                            className="block mt-4 mx-auto bg-white text-black p-2 rounded">Информация о Steam Deck
                    </button>

                    <button onClick={handleSettingsClick}
                            className="block mt-[5%] ml-[39%] bg-white text-black p-2 rounded">Закрыть настройки
                    </button>
                </div>
            )}
            {infoOpen && (
                <div
                    className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[725px] h-[453px] bg-customGray'>
                    <div className='flex items-start justify-start space-x-3 mt-[24px]'>
                        <div className='flex'>
                            <img className='ml-[56px] mr-[10px]' src={avatar} alt="User Avatar"/>
                            <p className='font-kantumruy text-base text-gray-50'>{currentUser.username}</p>
                        </div>
                        <p className='font-kantumruy text-base text-gray-50'>Friends: {yourFriend}</p>
                        <p className='font-kantumruy text-base text-gray-50'>Balance: {currentUser.balance} coin</p>
                        <div className='flex cursor-pointer' onClick={handleSettingsClick}>
                            <img className='ml-[170px] mr-[10px]' src={iconSettings} alt="Settings"/>
                            <p className='font-kantumruy text-base text-gray-50'>Settings</p>
                        </div>
                    </div>
                    <p className='font-kantumruy text-lg text-gray-50 mb-2'>Информация о консоли</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>Название: {steamDeck.title}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>Гарантия: {steamDeck.hasGaranty ? 'Да' : 'Нет'}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>HDMI порты: {steamDeck.ports.HDMI}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>USB порты: {steamDeck.ports.USB}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>Ethernet порты: {steamDeck.ports.Ethernet}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>FPS: {steamDeck.system.fps}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>HDR: {steamDeck.system.isHDR ? 'Да' : 'Нет'}</p>
                    <p className='font-kantumruy text-base text-gray-50 mb-2'>Remote
                        Play: {steamDeck.system.remotePlay ? 'Да' : 'Нет'}</p>
                    <button onClick={handleInfoClick} className="mt-4 bg-white text-black p-2 rounded">Закрыть
                        информацию
                    </button>
                </div>
            )}
        </div>
    );
}
