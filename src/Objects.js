import {Friends} from "./Classes/Friends.js";
import {User} from "./Classes/User.js";
import {Game} from "./Classes/Games.js";
import {Achievement} from "./Classes/Achivements.js";

export const user1 = new User(1, 'JohnDoe', 'johndoe@gmail.com', 'password123', 100);
export const user2 = new User(2, 'VitalyMar', 'vitalymar@mail.com', 'passwordzxc', 100);

export const game1 = new Game(1, 'The Last of Us', 'Action', 'Naughty Dog', 'Sony', '2013-06-14', 50);
user1.gameLibrary.push(game1);
export const game2 = new Game(1, 'The Last of Us', 'Action', 'Naughty Dog', 'Sony', '2013-06-14', 50);
user2.gameLibrary.push(game1);

export const achievement1 = new Achievement(1, 'Прохождение кампании', 'Завершить сюжетную линию', false);
game1.achievements.push(achievement1);
export const achievement2 = new Achievement(1, 'Прохождение кампании', 'Завершить сюжетную линию', true);
game1.achievements.push(achievement2);

export const myFriends = new Friends();
myFriends.addFriend(user1);
myFriends.addFriend(user2);

myFriends.removeFriend(2);

