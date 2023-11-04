// fetch
// default: Get
// Post
// Put
// Delete

//CRUD

// create read update delete

let api_url = "https://jsonplaceholder.typicode.com/todos";

fetch(api_url)
    .then((response)=> response.json)
    .then((json)=> console.log(json));