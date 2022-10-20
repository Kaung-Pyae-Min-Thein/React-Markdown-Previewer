import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Editor, Preview } from './components';
import { MainLayout } from "./layouts";


function App() {
  return (
    <div className="App">
      <MainLayout editor={<Editor />} preview={<Preview />} />
    </div>
  );
}

export default App;
