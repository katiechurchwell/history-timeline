import React from "react";

export function regexFormat(data) {
  const specialCharacter = /[\[\]={}|]/gi;
  const html = /(<(?<=<)(.*)(?=\>)>)/gi;
  const link = `/http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi`;

  const formattedData = data
    .replace(specialCharacter, "")
    .replace(html, "")
    .replace(link, "")
    .split("*");

  return formattedData;
}
