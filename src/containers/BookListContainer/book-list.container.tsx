import { BookList } from "../../components/BookList/book-list.component";
import { useHomeService } from "./book-list.service";

export const BookListContainer = () => {
  const {
    topCategoryData,
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
  } = useHomeService();
  console.log(topCategoryData);
  return (
    <BookList
      isLoadingTopCategoryData={isLoadingTopCategoryData}
      topCategoryData={topCategoryData}
      fetchTopCategoryDataError={fetchTopCategoryDataError}
    />
  );
};
