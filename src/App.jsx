import './App.css';
import ItemList from './components/item-list/ItemList';

const mockItems = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

function App() {
  return (
    <div>
      <h1>ReactJS Homework 1</h1>
      <ItemList items={mockItems} />
    </div>
  );
}

export default App;
