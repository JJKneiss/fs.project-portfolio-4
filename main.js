let callData;
console.log("HEllo world")

loadAPI();
function loadAPI() {
    // let [connect, option] = APIData();
    let data = {
        project: 'sprinkle-great-rodent',
        option: { method: 'GET' },
        token: '5b1064585f4ab8706d275f90',
        endpoint: ['lists', 'items']
    }
    var api = "https://gateway.marvel.com/v1/public/characters?apikey=";
    var auth = "9fc3988f672586da032a847df46e7861";
    var connect = api + auth;
    fetch(connect, data.option)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // const evt = new Event("vGetItems_Complete");
            callData = data;
        })
        .catch(err => console.log(err));
}
console.log(callData.results);