import { Home } from "../../components/Home/home.component";
import { bookSlice } from "../../store/bookSlice";

export const HomeContainer = () => {
  const { data } = bookSlice.endpoints.fetchBooks.useQuery({});
  console.log(data);
  return <Home />;
};
