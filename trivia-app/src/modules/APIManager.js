export default Object.create(null, {
    getBooks: {
        value: function (section, id) {
            return fetch(`https://opentdb.com/api.php?amount=10&category=10&type=multiple`).then(e => e.json())
        }
    }
})