var xhr = new XMLHttpRequest();

// API URL notes 🤔
// fetch data: action=query
// prevent CORS errors: origin=*
// json : format=json

var url = "https://www.mediawiki.org/w/api.php?action=query&origin=*&format=json&prop=cirrusdoc&titles=Main_Page";

// Open a new connection, using the GET request on the URL endpoint
// Providing 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);

// Once request has loaded...
xhr.onload = function() {
  // Parse the request into JSON
  var data = JSON.parse(this.response);

  // Log the data object
  console.log(data);
}

// Send request to the server
xhr.send();