import './App.css';
import Food from './pages/Food/Food';
import { DataProvider } from './constext/DataContext';

function App() {
  return (
    <div>
      <DataProvider>
        <Food />
      </DataProvider>
    </div>
  );
}

export default App;
