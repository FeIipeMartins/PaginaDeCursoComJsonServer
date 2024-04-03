// Course.js
import React from 'react';

function Course({ title, instructor, duration, image }) {
  return (
    <div className="course">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Professor: {instructor}</p> 
      <p>Duração: {duration}</p>
      <button>Inscreva-se</button>
    </div>
  );
}

export default Course;
