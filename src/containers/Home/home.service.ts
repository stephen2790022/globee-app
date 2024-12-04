import { useMemo } from "react";
import { bookApi } from "../../store/bookApi";
import { TopCategory } from "../../store/bookApi.types";

export const useHomeService = () => {
  const {
    data,
    isFetching: isLoadingTopCategoryList,
    error,
  } = bookApi.endpoints.fetchBooks.useQuery({});

  const { topCategoryList } = useMemo(() => {
    return {
      topCategoryList:
        data?.top_category_list.find(
          (category: TopCategory) => category.id_top_category === "_top",
        ) || [],
    };
  }, [data]);

  return {
    topCategoryList,
    isLoadingTopCategoryList,
    error,
  };
};