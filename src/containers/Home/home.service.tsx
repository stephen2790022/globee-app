import { useMemo } from "react";
import { bookSlice } from "../../store/bookSlice";
import { TopCategory } from "../../store/types";

export const useHomeService = () => {
  const { data, isFetching: isLoadingTopCategoryList } =
    bookSlice.endpoints.fetchBooks.useQuery({});
  const topCategoryList = useMemo(() => {
    return {
      topCategoryList: data?.top_category_list.filter.find(
        (cat: TopCategory) => cat.id_top_category === "_top",
      ),
    };
  }, [data]);
  console.log(topCategoryList);

  return {
    topCategoryList,
    isLoadingTopCategoryList,
  };
};
