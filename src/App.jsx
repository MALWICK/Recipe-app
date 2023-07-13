import { Chef, Footer, Gallery, Header, Laurels } from './container';
import { Navbar } from './components';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Chef />
      <Laurels />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
