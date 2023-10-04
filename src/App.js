import './App.css';
let name = "<b> Sneha Gautam </b>"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="contain">
      <h1>Hello {name}</h1>      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet iure pariatur ipsa incidunt ut quidem, porro rem saepe laudantium adipisci assumenda consectetur. Ratione quam corporis reprehenderit assumenda omnis consectetur aperiam quis quibusdam officia recusandae?
      </p>
    </div>
    </>
  );
}

export default App;
