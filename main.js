loadAPI();
function loadAPI() {
    var api = "https://gateway.marvel.com/v1/public/characters?apikey=";
    var auth = "9fc3988f672586da032a847df46e7861";
    var connect = api + auth;
    fetch(connect)
        .then(response => response.json())
        .then(data => {
            console.log(data.data.results)
            let character = data.data.results[4];
            document.getElementById("name").innerHTML = character.name;
            document.getElementById("image").setAttribute("src", character.thumbnail.path + "." + character.thumbnail.extension);
            document.getElementById("description").innerHTML = character.description;
        })
        .catch(err => console.log(err));
}