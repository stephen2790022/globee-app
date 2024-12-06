import { useParams } from "react-router-dom";
import { useBookListService } from "../BookListContainer/book-list.service";
import { useMemo } from "react";

type ParamsType = {
  id: string;
};
export const useBookDetailsService = () => {
  const { id } = useParams<ParamsType>();
  const {
    topCategoryData,
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
  } = useBookListService();

  const bookData = useMemo(() => {
    if (
      fetchTopCategoryDataError ||
      !topCategoryData ||
      !topCategoryData.sub_category_list
    ) {
      return null;
    }
    for (const subCategory of topCategoryData.sub_category_list) {
      const book = subCategory.book_list.find((b) => b.id_book === id);
      if (book) {
        return book;
      }
    }
    return null;
  }, [id, topCategoryData, fetchTopCategoryDataError]);

  return {
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
    bookData,
  };
};
