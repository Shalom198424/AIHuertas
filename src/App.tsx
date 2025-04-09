import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { ForumProvider } from "./contexts/ForumContext";

const routes = import.meta.env.VITE_TEMPO === "true" ? [] : [];


// Lazy load pages to improve performance
const Tips = lazy(() => import("./pages/Tips"));
const TipDetail = lazy(() => import("./pages/TipDetail"));
const Forum = lazy(() => import("./pages/Forum"));
const NewThreadForum = lazy(() => import("./components/forum/NewThreadForum"));
const ThreadDetail = lazy(() => import("./components/forum/ThreadDetail"));
const ForumThread = lazy(() => import("./components/forum/ForumThread"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const Search = lazy(() => import("./pages/Search"));
const VegetableDiversityGuide = lazy(() => import("./pages/VegetableDiversityGuide"));
const SeasonalPlantingGuide = lazy(() => import("./pages/SeasonalPlantingGuide"));
const CompostingGuide = lazy(() => import("./pages/CompostingGuide"));
const HerbsGuide = lazy(() => import("./pages/Herbs"));
const PestControlGuide = lazy(() => import("./pages/PestControlGuide"));
const WaterConservationGuide = lazy(() => import("./pages/WaterConservationGuide"));


function App() {
  return (
    <ForumProvider>
      <AuthProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <>
            <Navbar />
            <div className="pt-20">
              {/* Add padding top to account for fixed navbar */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/tips/:category" element={<Tips />} />
                <Route path="/tips/detail/:id" element={<TipDetail />} />
                <Route path="/forum" element={<Forum />} />
                <Route
                  path="/forum/new-thread-forum"
                  element={
                    <NewThreadForum
                      isOpen={true}
                      onClose={() => console.log("Close modal")}
                      onSubmit={(data) => console.log("Submit data", data)}
                    />
                  }
                />
                <Route path="/forum/thread/:id" element={<ThreadDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-tips" element={<Navigate to="/profile" />} />
                <Route path="/my-posts" element={<Navigate to="/profile" />} />
                <Route path="/settings" element={<Navigate to="/profile" />} />
                <Route path="/search" element={<Search />} />
                <Route path="/vegetable-diversity-guide" element={<VegetableDiversityGuide />} />
                <Route path="/seasonal-planting-guide" element={<SeasonalPlantingGuide />} />
                <Route path="/composting-guide" element={<CompostingGuide />} />
                <Route path="/herbs-guide" element={<HerbsGuide />} />
                <Route path="/pest-control-guide" element={<PestControlGuide />} />
                <Route path="/water-conservation-guide" element={<WaterConservationGuide />} />
                <Route path="*" element={<Navigate to="/" />} />
                {import.meta.env.VITE_TEMPO === "true" && (
                  <Route path="/tempobook/*" />
                )}
              </Routes>
            </div>
            <Footer />
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>
      </AuthProvider>
    </ForumProvider>
  );
}

export default App;

