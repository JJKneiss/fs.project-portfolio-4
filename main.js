loadAPI()
function loadAPI() {
    // let [connect, option] = APIData();
    let data = {
        project: 'sprinkle-great-rodent',
        option: { method: 'GET' },
        token: '5b1064585f4ab8706d275f90',
        endpoint: ['lists', 'items']
    }
    var api = "http://gateway.marvel.com/v1/public/comics?apikey=";
    var auth = "c50913a9334a3754d0d52463a2fb668bc5ee5979";
    var connect = api + auth;
    fetch(connect, data.option)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // const evt = new Event("vGetItems_Complete");
            // evt.data = data;
            // document.dispatchEvent(evt);
        })
        .catch(err => console.log(err));
}