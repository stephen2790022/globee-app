import { Home } from "../../components/Home/home.component";
import { Loader } from "../../components/UI/Loader/loader";
import { useHomeService } from "./home.service";

export const HomeContainer = () => {
  const { topCategoryList, isLoadingTopCategoryList } = useHomeService();
  console.log(topCategoryList);
  return isLoadingTopCategoryList ? <Loader /> : <Home />;
};
