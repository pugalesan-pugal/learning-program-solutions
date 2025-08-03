import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeComponent, setActiveComponent] = useState("book");
  const [showAll, setShowAll] = useState(false);

  // List rendering with keys
  const courses = [
    { id: 1, name: "React Basics" },
    { id: 2, name: "Advanced JavaScript" },
    { id: 3, name: "Node.js Essentials" },
  ];

  // Conditional Rendering - Method 1: if-else
  let componentToRender;
  if (activeComponent === "book") {
    componentToRender = <BookDetails />;
  } else if (activeComponent === "blog") {
    componentToRender = <BlogDetails />;
  } else {
    componentToRender = <CourseDetails />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📘 BloggerApp</h1>

      <button onClick={() => setActiveComponent("book")}>Show Book</button>
      <button onClick={() => setActiveComponent("blog")}>Show Blog</button>
      <button onClick={() => setActiveComponent("course")}>Show Course</button>
      <button onClick={() => setShowAll(!showAll)}>Toggle All Components</button>

      <hr />

      {/* Method 1: if-else (above) */}
      {componentToRender}

      {/* Method 2: Inline conditional rendering using ternary */}
      <h3>🔁 Ternary Rendering</h3>
      {activeComponent === "blog" ? <BlogDetails /> : <p>Blog not selected.</p>}

      {/* Method 3: Logical && rendering */}
      <h3>✔️ Logical AND Rendering</h3>
      {activeComponent === "course" && <CourseDetails />}

      {/* Method 4: Rendering multiple components */}
      {showAll && (
        <>
          <BookDetails />
          <BlogDetails />
          <CourseDetails />
        </>
      )}

      <h3>📋 Rendering List of Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li> // Keys used here
        ))}
      </ul>
    </div>
  );
}

export default App;
