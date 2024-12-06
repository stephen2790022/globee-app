import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { BookListContainer } from "./containers/BookListContainer/book-list.container";
import { RootLayout } from "./components/UI/Layout/layout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BookDetailsContainer } from "./containers/BookDetailsContainer/book-detail.container";

const App = () => {
  return (
    <Provider store={store}>
      <RootLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/book_list" replace />} />
            <Route path="/book_list" element={<BookListContainer />} />
            <Route path="/book/:id" element={<BookDetailsContainer />} />
          </Routes>
        </Router>
      </RootLayout>
    </Provider>
  );
};

export default App;
