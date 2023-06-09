
import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider >
    <Home />
    </DataProvider>
    // home is a children of DataProvider. if u wont pass children it will give error
  );
}

export default App;
