
import './App.css';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';


function App() {

  return (
    <>
      <Header title="Texttastic" searchBar={false} />
      <div className="container my-3">
        <TextForm heading="Enter your text below"/>
      </div>
    </>
  );
}

export default App;
