import { Routes, Route } from "react-router";
import { RealEstateHomePage } from "./pages/RealEstateHomePage";
import { RealEstateThankYouPage } from "./pages/RealEstateThankYouPage";
import { RealEstateLoginPage } from "./pages/RealEstateLoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { RealEstateDashboardPage } from "./pages/RealEstateDashboardPage";
import { ThemeProvider } from "../app/components/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      {/* Global background wrapper */}
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<RealEstateHomePage />} />
          <Route path="/thank-you" element={<RealEstateThankYouPage />} />
          <Route path="/login" element={<RealEstateLoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <RealEstateDashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
