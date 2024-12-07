import { useParams } from "react-router-dom";
import { useBookListService } from "../BookListContainer/book-list.service";
import { useMemo } from "react";
import { Book, TopCategory } from "../../store/rtkEndPoints/bookApi.types";

type ParamsType = {
  id: string;
};

const findBookById = (
  id: string | undefined,
  topCategoryData: TopCategory,
): Book | null => {
  if (!id || !topCategoryData?.sub_category_list) return null;

  for (const subCategory of topCategoryData.sub_category_list) {
    const book = subCategory.book_list.find((b) => b.id_book === id);
    if (book) {
      return book;
    }
  }
  return null;
};

export const useBookDetailsService = () => {
  const { id } = useParams<ParamsType>();
  const {
    topCategoryData,
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
  } = useBookListService();

  const bookData = useMemo(
    () => findBookById(id, topCategoryData),
    [id, topCategoryData],
  );

  return {
    isLoadingTopCategoryData,
    fetchTopCategoryDataError,
    bookData,
  };
};
