import { Route, Routes } from 'react-router-dom';

import { Home, Navigation } from 'routes';
import { Path } from 'types';

const App = () => {
  return (
    <Routes>
      <Route path={Path.Default} element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
