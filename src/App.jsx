import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';

const queryClient = new QueryClient();

function App() {

  

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/index' element={<Index />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App