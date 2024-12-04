import { ErrorType, TopCategory } from "../../store/bookApi.types";
import { Loader } from "../UI/Loader/loader";
import { StyledTab } from "../UI/StyledTab/styled-tab";

type HomeProps = {
  topCategoryData: TopCategory;
  isLoadingTopCategoryData: boolean;
  fetchTopCategoryDataError: ErrorType;
};

export const BookList = ({
  topCategoryData,
  isLoadingTopCategoryData,
  fetchTopCategoryDataError,
}: HomeProps) => {
  return (
    <StyledTab>
      {(() => {
        if (isLoadingTopCategoryData) return <Loader />;
        if (fetchTopCategoryDataError || !Object.keys(topCategoryData).length) {
          <div>
            {fetchTopCategoryDataError.message ||
              "データが見つかりませんでした。"}
          </div>;
        }
      })()}
    </StyledTab>
  );
};
