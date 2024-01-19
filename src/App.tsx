import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInput, { customeInputState } from './Component/CustomInput';
import Cards from './Component/Cards';
import Notifcation from './Component/Notifcation/Notifcation';
import Banner from './Component/Banner/Banner';
import HeaderAnt from './Component/Heaader/Header';
import TopRate from './Component/TopRate/TopRate';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import NowPlay from './Component/NowPlay/NowPlay';
import { Route, Routes } from 'react-router-dom';
import SinglePage from './Pages/Single/SinglePage';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
interface ListItem {
  id: string | number;
  title: string;
  description: string;
}

const des: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const initialList: ListItem[] = [
  { id: 'l-1', title: 'Test-1', description: des },
  { id: 'l-2', title: 'Test-2', description: des },
  { id: 'l-3', title: 'Test-3', description: des },
  { id: 'l-4', title: 'Test-4', description: des },
  { id: 'l-5', title: 'Test-5', description: des },
];
function App() {

  const [list, setList] = useState<ListItem[]>(initialList)
  const [newList, setNewList] = useState<ListItem>({ id: '', title: '', description: '' })

  const addItem = () => {
    if (newList) {

      setList((prevList: ListItem[]) => [...prevList, newList])
    }
  }
  const addNewValue = (data: customeInputState) => {
    if (newList) {
      setList((prevList: ListItem[]) => [...prevList, data])
    }

  }

  const removeItem = (data: customeInputState) => {
    setList((prevList: ListItem[]) => prevList.filter((item => item.title !== data.title)))
  }
  // Create a client
  const queryClient = new QueryClient()


  return (
    <div className="App">
      
        <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="single/:id" element={<SinglePage />} />
          </Routes>
      </Layout>
        </QueryClientProvider>

    </div>
  );
}

export default App;
