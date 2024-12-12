import Header from './components/Header';

import Loading from './components/Loading';

import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import './styles/App.css';

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <Loading />
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
