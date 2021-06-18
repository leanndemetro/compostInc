import React from 'react';

//creates and exports a function called seo that passes in the title and description data to be rendered at a later date? 
export default function Seo({ title, description }) {
  document.querySelector('title').innerHTML = title;
  return null;
}
