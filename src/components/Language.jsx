import React from "react";


const Language = ({posts, detectLangApi, setDetectedLanguageKey}) => {
 //translation function
 const getLanguageSource = (post) => {
  fetch(detectLangApi, {
    method: 'POST',
    body: JSON.stringify({
      q: post
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    setDetectedLanguageKey(data.language)
    console.log(data.language);
  });
}

 return (
  <div id="google_translate_element"></div>
 );
}


export default Language;