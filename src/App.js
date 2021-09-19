import './App.css';
import HeaderPage from './components/header/HeaderPage'
import Content from './components/content/Content'
import FooterPage from './components/footer/FooterPage'

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <Content />
      <FooterPage />
    </div>
  );
}

export default App;
