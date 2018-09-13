export default Object.create(null, {
    getBooks: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=10&type=multiple`).then(e => e.json())
        }
    },
    getSports: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=21&type=multiple`).then(e => e.json())
        }
    },
    getFilms: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=11&type=multiple`).then(e => e.json())
        }
    },
    getVideoGames: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=15&type=multiple`).then(e => e.json())
        }
    },
    getMythology: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=20&type=multiple`).then(e => e.json())
        }
    },
    getAnimals: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=27&type=multiple`).then(e => e.json())
        }
    },
    getAnime: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=31&type=multiple`).then(e => e.json())
        }
    },
    getGeneralKnowledge: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`).then(e => e.json())
        }
    },
    getGeography: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=22&type=multiple`).then(e => e.json())
        }
    },
    getArt: {
        value: function () {
            return fetch(`https://opentdb.com/api.php?amount=10&category=25&type=multiple`).then(e => e.json())
        }
    }
})