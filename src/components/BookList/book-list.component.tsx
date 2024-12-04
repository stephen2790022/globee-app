import { ErrorType, TopCategory } from "../../store/bookApi.types";
import { Carousel } from "../UI/Carousel/carousel";
import { Loader } from "../UI/Loader/loader";
import { StyledTab } from "../UI/StyledTab/styled-tab";
import { Section, Title } from "./book-list.style";

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
          return (
            <div>
              {fetchTopCategoryDataError.message ||
                "データが見つかりませんでした。"}
            </div>
          );
        }

        return topCategoryData.sub_category_list.map((subCategory) => (
          <Section key={subCategory.id_category}>
            <Title>{subCategory.name_category}</Title>
            <Carousel bookList={subCategory.book_list} />
          </Section>
        ));
      })()}
    </StyledTab>
  );
};
