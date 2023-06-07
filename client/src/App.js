import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import exportStorage from './redux/store';
import router from './router/router';

function App() {
    return (
        <Provider store={ exportStorage.store }>
            <PersistGate loading={ null } persistor={ exportStorage.persistor }>
                <RouterProvider router={ router } />
            </PersistGate>
        </Provider>
    );
}

export default App;
