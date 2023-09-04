import { Fragment } from 'react';
import DisplayScreen from './DisplayScreen';
import NumbersScreen from './NumbersScreen';

const App = () => {
  return (
    <Fragment>
      <DisplayScreen />
      <NumbersScreen />
    </Fragment>
  );
};

export default App;
