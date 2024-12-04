import { useMemo } from "react";
import { bookApi } from "../../store/bookApi";
import { ErrorType, TopCategory } from "../../store/bookApi.types";
import { UseHomeServiceReturnType } from "./book-list.types";

export const useHomeService = (): UseHomeServiceReturnType => {
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
