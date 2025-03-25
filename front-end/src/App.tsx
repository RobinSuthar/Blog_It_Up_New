import MainPage from "./pages/MainPage";
import AboutPage from "./pages/Aboutpage";
import InfoPage from "./pages/InfoPage";
import Result from "./pages/Result";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeToggle } from "./components/mode-toogle";
import { NavigationMenuDemo } from "./democomponents/NagiationDemo";
import Documentation from "./pages/Documentation";
import PostBlog from "./pages/PostBlog";
import SpecificBlog from "./pages/SpecificBlog";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex justify-center mt-4">
          <NavigationMenuDemo />
          <ModeToggle></ModeToggle>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/docs" element={<Documentation />} />
          <Route path="/aboutus" element={<AboutPage />} />
          <Route path="/infopage" element={<InfoPage />} />
          <Route path="/blog" element={<Result />} />
          <Route path="/postblog" element={<PostBlog />} />
          <Route path="/specificblog" element={<SpecificBlog />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
