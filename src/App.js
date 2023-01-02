import DataProvider from 'context/DataProviderContext';
import { RouterProvider } from 'react-router-dom';
import routes from 'routes/routes';

function App() {
  return (
    <DataProvider>
      <RouterProvider router={routes}/>
    </DataProvider>
  );
}

export default App;
