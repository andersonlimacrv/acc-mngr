import { Header } from "@/components/home/Header";
import { Page1 } from "@/components/pages/test/page1";
import { Page2 } from "@/components/pages/test/page2";
import { MixPage } from "@/components/pages/test/mix";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { LandingPage } from "@/pages/LandingPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useAuth } from "@/hooks/useAuth";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { HomePage } from "@/pages/~/Home";
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
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/mix" element={<MixPage />} />
    </Routes>
  )
}

export default App
