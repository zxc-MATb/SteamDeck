class User {
    constructor(id, username, email, password, balance) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this._balance = balance; // Используем приватное свойство для контроля доступа
        this.friends = [];
        this.gameLibrary = [];
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        // Логика для обновления баланса
        if (newBalance >= 0) {
            this._balance = newBalance;
        } else {
            console.error("Баланс не может быть отрицательным");
        }
    }
}

