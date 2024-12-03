import { useMemo } from "react";
import { bookSlice } from "../../store/bookSlice";
import { TopCategory } from "../../store/types";

export const useHomeService = () => {
  const {
    data,
    isFetching: isLoadingTopCategoryList,
    error,
  } = bookSlice.endpoints.fetchBooks.useQuery({});
  console.log(data);
  const { topCategoryList } = useMemo(() => {
    return {
      topCategoryList:
        data?.top_category_list.find(
          (v: TopCategory) => v.id_top_category === "_top",
        ) || [],
    };
  }, [data]);

  return {
    topCategoryList,
    isLoadingTopCategoryList,
    error,
  };
};
