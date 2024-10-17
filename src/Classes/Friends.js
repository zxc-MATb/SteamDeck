export class Friends {
    constructor() {
        this.friendsList = [];
    }

    addFriend(friend) {
        if (!this.friendsList.some(f => f.id === friend.id)) {
            this.friendsList.push(friend);
            console.log(`Друг ${friend.username} добавлен`);
        } else {
            console.log(`Пользователь ${friend.username} уже есть в списке друзей`);
        }
    }

    removeFriend(friendId) {
        this.friendsList = this.friendsList.filter(f => f.id !== friendId);
        console.log(`Друг с ID ${friendId} удален из списка`);
    }
}