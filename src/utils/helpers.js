export function regexFormat(data) {
  //sanitizing expressions
  const specialCharacter = /[\[\]={}|]/gi;
  const html = /(<(?<=<)(.*)(?=\>)>)/gi;
  const link = `/http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*,]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi`;

  //regex-ed array
  const formattedData = data
    .replace(specialCharacter, "")
    .replace(html, " ")
    .replace(link, " ")
    .split("*");

  //date format
  const year = /^ ?([0-9]{4}–?-?([0-9]{4})?)/g;

  //check if value is null
  function ifNull(value) {
    if (value != null) {
      return value[0];
    } else {
      return "sorry, no data here!";
    }
  }

  //construct array of objects
  const objectArray = [];

  formattedData.forEach(function (element) {
    const match = element.match(year);
    const object = {
      id: ifNull(match),
      value: element.replace(year, ""),
    };

    objectArray.push(object);
  });

  return objectArray;
}
