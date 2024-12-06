import { BookList } from "../../components/BookList/book-list.component";
import { useBookListService } from "./book-list.service";

export const BookListContainer = () => {
  const {
    topCategoryData,
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
  } = useBookListService();
  return (
    <BookList
      isLoadingTopCategoryData={isLoadingTopCategoryData}
      topCategoryData={topCategoryData}
      fetchTopCategoryDataError={fetchTopCategoryDataError}
    />
  );
};
