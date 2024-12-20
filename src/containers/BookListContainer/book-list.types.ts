import { ErrorType, TopCategory } from "../../store/rtkEndPoints/bookApi.types";

export type UseBookListServiceReturnType = {
  topCategoryData: TopCategory;
  isLoadingTopCategoryData: boolean;
  fetchTopCategoryDataError: ErrorType;
};
