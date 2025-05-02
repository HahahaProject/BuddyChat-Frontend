import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from './Layout';
import { Home } from "@/pages/home";
import { Random } from '@/pages/random';
import { Group } from '@/pages/group';
import { path} from '@/shared/consts/paths';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={`/${path.random}`} element={<Random/>}/>
        <Route path={`/${path.group}`} element={<Group/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
