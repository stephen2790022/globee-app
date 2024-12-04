import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookListContainer } from "./containers/BookListContainer/book-list.container";
import { RootLayout } from "./components/UI/Layout/layout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "swiper/css";

const App = () => {
  return (
    <Provider store={store}>
      <RootLayout>
        <Router>
          <Routes>
            <Route path="/" element={<BookListContainer />} />
          </Routes>
        </Router>
      </RootLayout>
    </Provider>
  );
};

export default App;
