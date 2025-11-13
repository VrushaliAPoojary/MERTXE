import { createRoot } from 'react-dom/client';

function Greeting() {
  return (
    <>
    <div><h1>Edume</h1></div>
    <div><p>Learn React Js</p></div>
    <div><button>Get Started</button></div>
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    </>
  )}

  function StudyCourses() {
    return (
      <>
      <div><h1>Courses</h1></div>
      <div><p>Learn Full Stack Development</p></div>
      <div><button>Explore Courses</button></div>
      <div>
        <ul>
          <li>Web Development</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
        </ul>
      </div>
  
      </>
    )}
















  const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
const roots = createRoot(document.getElementById('roots'));
roots.render(<StudyCourses />);