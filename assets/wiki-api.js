var xhr = new XMLHttpRequest();

// API URL notes 🤔
// fetch data: action=query
// prevent CORS errors: origin=*
// json : format=json
// search by title deprecated

//https://www.mediawiki.org/w/api.php?action=query&origin=*&format=json&list=search&srwhat=title&srsearch=17th_century

var url = "https://en.wikipedia.org/api/rest_v1/page/html/17th_century";

//https://en.wikipedia.org/api/rest_v1/page/segments/17th_century WORKS
//https://en.wikipedia.org/api/rest_v1/page/html/17th%20century

//action=query&list=search&srsearch=meaning

// Open a new connection, using the GET request on the URL endpoint
// Providing 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);

// Once request has loaded...
xhr.onload = function() {
  // Parse the request into JSON
  // var data = JSON.parse(this.response);

  // // Log the data object
  // console.log(data);
  console.log(this.response)
}

// Send request to the server
xhr.send();