fetch(
    "https://api.windy.com/api/webcams/v2/list/category=mountain/region=US.OR/?show=webcams:image",
    {
      method: "GET",
      headers: {
        "x-windy-key": "fRBdejZXV9tukKAYkPngOtGOg0bYrvV9",
      },
    }
  ).then(function (response) {
    response.json().then(function (webcam) {
      randomImage(webcam);
    });
  });