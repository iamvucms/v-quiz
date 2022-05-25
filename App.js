import React, {useEffect} from 'react';
import AppNavigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ConfirmModal, SubscriptionModal} from './src/components';
import {trunk} from './src/appStore';
import {PortalProvider} from '@gorhom/portal';

const App = () => {
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    trunk.init().then(() => {
      setLoaded(true);
    });
  }, []);
  return (
    <SafeAreaProvider>
      <PortalProvider>
        <AppNavigation />
        <SubscriptionModal />
        <ConfirmModal />
      </PortalProvider>
    </SafeAreaProvider>
  );
};

export default App;
