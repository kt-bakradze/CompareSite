import './App.css';

function App() {
  return (
    <div className='App'>
      <h3>IMPEL</h3>
      <div className='titleAndParagraph'>
        <h1>COMPARE VEHICLE</h1>
        <p>DESCRIPTION</p>
      </div>
      <div>
        <input type='text' placeholder='Vhicle default' className='vhicleDefault vhicleSearch'/>
        <input type='text' placeholder='Vhicle default' className='vhicleSecond vhicleSearch'/>
      </div>
      <button>Compare</button>
    </div>
  );
}

export default App;
