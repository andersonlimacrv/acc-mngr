import { Header } from "@/components/home/Header";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { LandingPage } from "@/pages/LandingPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
const HomePage = () => <div>Home</div>;
function App() {
    const { isAuthenticated } = useAuth();
    return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <LandingPage />
          </>
        }
      />
      <Route element={<ProtectedRoute isLoggedIn={isAuthenticated} />}>
        <Route path="/~" element={<DashboardLayout />}>
           <Route index element={<HomePage/>} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
