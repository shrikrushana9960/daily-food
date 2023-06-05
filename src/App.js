import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    
  },{
    
    path: "/privacy_policy",
    element: <PrivacyPolicy/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
