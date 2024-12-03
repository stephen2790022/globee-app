import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./containers/Home/home.container";
import { RootLayout } from "./components/Layout/layout";

const App = () => {
  return (
    <RootLayout>
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </Router>
    </RootLayout>
  );
};

export default App;
