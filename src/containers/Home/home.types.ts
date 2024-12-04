import { ErrorType, TopCategory } from "../../store/bookApi.types";

export type UseHomeServiceReturnType = {
  topCategoryData: TopCategory;
  isLoadingTopCategoryData: boolean;
  fetchTopCategoryDataError: ErrorType;
};
