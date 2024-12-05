import { ErrorType, TopCategory } from "../../store/bookApi.types";

export type UseBookListServiceReturnType = {
  topCategoryData: TopCategory;
  isLoadingTopCategoryData: boolean;
  fetchTopCategoryDataError: ErrorType;
};
