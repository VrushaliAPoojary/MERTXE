import { createRoot } from 'react-dom/client';

function Greeting() {
  return <h1>Hello, welcome to Edume corner!</h1>;
}
function Greting() {
  return <h2>Welcome to the learning platform!</h2>;
}

const root = createRoot(document.getElementById('root'));
root.render(<Greeting />);
const roots = createRoot(document.getElementById('roots'));
roots.render(<Greting />);
