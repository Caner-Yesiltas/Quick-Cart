import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import PageContainer from './container/PageContainer';
import './styles/App.css';
import Drawer from '@mui/material/Drawer';
import { setDrawer, calculateBasket } from './redux/slices/basketSlice';
import { useEffect } from 'react';

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <Loading />
        <Drawer
          className='drawer'
          sx={{ padding: '20px' }}
          anchor='right'
          open={drawer}
          onClose={() => dispatch(setDrawer())}
          variant='temporary'
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img
                      style={{ marginRight: '5px' }}
                      src={product.image}
                      width={50}
                      height={50}
                      alt=''
                    />
                    <p className='title'>
                      {product.title}({product.count})
                    </p>
                    <p
                      style={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        width: '60px',
                      }}
                    >
                      {product.price}TL
                    </p>
                    <button
                      style={{
                        padding: '5px',
                        borderRadius: '5px',
                        backgroundColor: 'rgb(185, 76, 76)',
                        border: 'none',
                        color: '#fff',
                        width: '50px',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div></div>
                </div>
              );
            })}
          <div>
            <p style={{ textAlign: 'center' }}>
              {' '}
              Total Amount : {totalAmount}{' '}
            </p>
          </div>
        </Drawer>
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
