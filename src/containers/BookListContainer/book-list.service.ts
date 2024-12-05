import { useMemo } from "react";
import { bookApi } from "../../store/rtkEndPoints/bookApi";
import { ErrorType, TopCategory } from "../../store/reducer/bookApi.types";
import { UseBookListServiceReturnType } from "./book-list.types";

export const useBookListService = (): UseBookListServiceReturnType => {
  const {
    data,
    isFetching: isLoadingTopCategoryData,
    error,
  } = bookApi.endpoints.fetchBooks.useQuery({});

  const { topCategory } = useMemo(() => {
    return {
      topCategory:
        data?.top_category_list.find(
          (category: TopCategory) => category.id_top_category === "_top",
        ) || null,
    };
  }, [data]);

  return {
    topCategoryData: topCategory as TopCategory,
    isLoadingTopCategoryData,
    fetchTopCategoryDataError: error as ErrorType,
  };
};
