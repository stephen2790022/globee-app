import { useBookDetailsService } from "./book-details.service";

export const BookDetailsContainer = () => {
  const { bookData, isLoadingTopCategoryData, fetchTopCategoryDataError } =
    useBookDetailsService();
  console.log(bookData);
  return <div>test</div>;
};
