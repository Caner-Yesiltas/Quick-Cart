import { useSelector } from 'react-redux';
import Header from './components/Header';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import './styles/App.css';
import Drawer from '@mui/material/Drawer';




function App() {
  const {products} = useSelector((store)=>store.basket);
  return (
    <div>
      <PageContainer>
        <Header />
        <Loading />
        <Drawer  className='drawer' sx={{padding:'20px'}}  anchor='right' open={true} >
    {
      products && products.map((product) => {
        return(
          <div>
            <img src={product.image} width={50} height={50} alt="" />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        )
      })
    }
      </Drawer>

        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
