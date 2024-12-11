import Header from './components/Header';
import ProductList from './components/ProductList';
import PageContainer from './container/PageContainer';
import './styles/App.css';

function App() {
  return <div>
    <PageContainer>
      <Header/>
      <ProductList/>
    </PageContainer>
  </div>;
}

export default App;
