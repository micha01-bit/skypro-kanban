import { AppRoutes } from './components/AppRoutes.jsx';
import { useState } from 'react';
import { AuthProvider } from './context/AuthProvider.jsx';
import { TasksProvider } from './context/TasksProvider.jsx';
import { GlobalStyle } from './components/GlobalStyles.js';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // опциональная цепочка - получить token, если есть значение перед ?., иначе undefined, а не ошибка
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("userInfo"))?.token);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AuthProvider>
          <TasksProvider>
            <AppRoutes token={token} setToken={setToken} />
          </TasksProvider>
        </AuthProvider>
      </ThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        z-index="5" />
    </>
  )
}

export default App 