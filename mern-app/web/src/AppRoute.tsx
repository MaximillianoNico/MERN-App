import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import LandingPage from './screens/landing-page';
import AddItemForm from './screens/add-form-page';
import UpdateForm from './screens/update-form-page';

const Component = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddItemForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Component;
