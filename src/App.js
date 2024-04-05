import { Provider } from 'react-redux';
import Body from './Components/Body';
import { appStore } from './utils/Redux/appStore';

function App() {
  return (
    <Provider store={appStore}>
          <div>
            <Body/>
          </div>
    </Provider>
  );
}

export default App;
