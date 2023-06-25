import { Login } from "./pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { RegisterCompany } from "./pages/RegisterCompany";
import { ListCompanies } from "./pages/ListCompanies";
import { Stocktaking } from "./pages/Stocktaking";
import { initializeApp } from "firebase/app";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { setCurrentUserSession } from "./reducers/imagine-apps/imagine-app.actions";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};
function App() {
  const app = initializeApp(firebaseConfig);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // Update the current user

      dispatch(
        dispatch(
          setCurrentUserSession({
            email: user?.email ?? "",
            uid: user?.uid ?? "",
          })
        )
      );
    });
  }, [app]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register-company"
          element={
            <ProtectedRoute>
              <RegisterCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/list-companies"
          element={
            <ProtectedRoute>
              <ListCompanies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stocktaking"
          element={
            <ProtectedRoute>
              <Stocktaking />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/register-company" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
