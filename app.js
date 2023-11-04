let api_url = "https://jsonplaceholder.typicode.com/todos"

fetch(api_url).then((response)=> response.json).then((json)=> console.log(json))