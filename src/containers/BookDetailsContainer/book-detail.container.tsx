import { BookDetails } from "../../components/BookDetails/book-details.component";
import { useBookDetailsService } from "./book-details.service";

export const BookDetailsContainer = () => {
  const { bookData, isLoadingTopCategoryData, fetchTopCategoryDataError } =
    useBookDetailsService();
  console.log(bookData);
  return (
    <BookDetails
      bookData={bookData}
      isLoadingTopCategoryData={isLoadingTopCategoryData}
      fetchTopCategoryDataError={fetchTopCategoryDataError}
    />
  );
};
