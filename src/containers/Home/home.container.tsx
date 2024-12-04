import { Home } from "../../components/Home/home.component";
import { useHomeService } from "./home.service";

export const HomeContainer = () => {
  const {
    topCategoryData,
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
  } = useHomeService();
  console.log(topCategoryData);
  return (
    <Home
      isLoadingTopCategoryData={isLoadingTopCategoryData}
      topCategoryData={topCategoryData}
      fetchTopCategoryDataError={fetchTopCategoryDataError}
    />
  );
};
