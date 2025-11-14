import { createRoot } from 'react-dom/client';
import './index.css';
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

    {/* <StudyCourses />
    <Coursenames /> */}


    </>
  )}

  function StudyCourses() {
    return (
      <>
      <div className= "hii"><h1 onClick>Courses</h1></div>
      <input type="text" placeholder="Search Courses" />
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

    function Learn(){
      return(
        <>
        <h1>Learn React Js</h1>
        <p>React is a JavaScript library for building user interfaces.</p>
        <button>Start Learning</button>
        </>
      )
    }
    function Coursenames(){
      return(
        <>

        <div><h2>Select your course below</h2></div>
        <div className="course-buttons" onClick={SubmitEvent}>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>React Js</button>
        </div>


        </>      )
    }
    function SubmitEvent(){
      alert("Course Selected Successfully")
    }

  const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
const roots = createRoot(document.getElementById('roots'));
roots.render(<StudyCourses />);
const roott = createRoot(document.getElementById('roott'));
roott.render(<Learn />);
const roottt = createRoot(document.getElementById('roottt'));
roottt.render(<Coursenames />);
