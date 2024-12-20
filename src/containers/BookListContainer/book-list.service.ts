import { useMemo } from "react";
import { useFetchBooksQuery } from "../../store/rtkEndPoints/bookApi";
import { ErrorType, TopCategory } from "../../store/rtkEndPoints/bookApi.types";
import { UseBookListServiceReturnType } from "./book-list.types";

export const useBookListService = (): UseBookListServiceReturnType => {
  const {
    data,
    isFetching: isLoadingTopCategoryData,
    error,
  } = useFetchBooksQuery({});

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
