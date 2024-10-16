class Game {
    constructor(id, title, genre, developer, publisher, releaseDate, spentHours) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.developer = developer;
        this.publisher = publisher;
        this.releaseDate = releaseDate;
        this.spentHours = spentHours;
        this.achievements = [];
    }
}