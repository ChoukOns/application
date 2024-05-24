import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil/accueil';
import Application from './Application/application';
import LoginPage from './login/LoginPage'; 
import Inscription from './Inscription/Inscription';
import ResetPassword from './login/resetPass';
import Adminn from './Admin/AdminComponent';
import Apprenant from './Apprenant/apprenant';
import CategoryPage from './Apprenant/CategoryPage'; 
import FileContentPage from './Application/FileContentPage';
import PrivateRoutes from './utils/PrivateRoutes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inscription/*" element={<Inscription />} />
        <Route path="/reset-password" element={<ResetPassword />} />
       
        {/* Utilisation du composant GrillesVides avec le domaine par défaut */}
        <Route path="/category/:id" element={<CategoryPage />} /> 
        <Route path="/file-content/:fileName" element={<FileContentPage />} />

        {/* need outhentication */}
        <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<Adminn />} />
          <Route path="/application" element={<Application />} />
          <Route path="/apprenant" element={<Apprenant />} />
        </Route>   

      </Routes>
    </Router>
  );
};

export default App;