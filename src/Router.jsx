
import App from "./App";
import { Dashboard, Team, Contacts } from "./scenes";
import SignIn from "./pages/sign-in";
import Main from "./pages/main";
import DetailProduct from './components/single-page'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          
          <Route index element={<SignIn />} />
          <Route path="main/*" element={<Main />}>
            <Route index element={<Dashboard />} />
            <Route path="category" element={<Team />} />
            <Route path="worker" element={<Contacts />} />
            <Route path="product/:id" element={<DetailProduct />} />
          </Route>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
