// package
import { BrowserRouter, Routes, Route } from "react-router-dom";
// slice
import { BaseLayout } from './Layout';
// layer
import { Home } from "@/pages/home";
import { Random } from '@/pages/random';
import { path} from '@/shared/consts/paths';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={`/${path.random}`} element={<Random/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
