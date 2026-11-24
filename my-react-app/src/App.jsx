import React from "react";
function App() {
  const courses = [
    { id: 1, name: "React JS", duration: "4 months" },
    { id: 2, name: "Python", duration: "3 months" },
    { id: 3, name: "maths", duration: "2 months" }
  ];

  return (
    <div>
      <h1>online student portal</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>Duration: {course.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default App;