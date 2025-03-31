import { ModalProvider } from './context/ModalProvider';
import { ThemeProvider } from './context/ThemeProvider';
import AppRoutes from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <AppRoutes />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
