import Header from './components/Header';
import ProductList from './components/ProductList';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import './styles/App.css';

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig/>
 
      </PageContainer>
    </div>
  );
}

export default App;
