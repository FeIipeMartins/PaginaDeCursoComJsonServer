import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Course from './Course';
/*
  Rodar Primeiro
  cd my-app
  npm start
*/
/*
  Depois
  cd my-app
  cd src 
  json-server --watch cursos.json --port 3001
*/

function App() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cursos')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setFilteredCourses(data);
      })
      .catch(error => console.error('Erro ao carregar os cursos:', error));
  }, []);

  const handleSearch = searchTerm => {
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="App">
      <Header userName="João" onSearch={handleSearch} /> 
      <h1>Catálogo de Cursos</h1>
      <div className="course-list">
        {filteredCourses.map(course => (
          <Course
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
