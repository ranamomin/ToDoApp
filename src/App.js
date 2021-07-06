
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {TodoItem} from './MyComponents/TodoItem';
import {Todos} from './MyComponents/Todos';


function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to market to get some mangoes."
    },
    {
      sno: 2,
      title: "Learn React",
      desc: "Complete the react website you were working on."
    },
    {
      sno: 3,
      title: "Review Data Structures",
      desc: "Watch a video on all the data structures for a review."
    },
  ]
  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
