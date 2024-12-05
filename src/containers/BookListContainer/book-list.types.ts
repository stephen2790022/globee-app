import { ErrorType, TopCategory } from "../../store/reducer/bookApi.types";

export type UseBookListServiceReturnType = {
  topCategoryData: TopCategory;
  isLoadingTopCategoryData: boolean;
  fetchTopCategoryDataError: ErrorType;
};
