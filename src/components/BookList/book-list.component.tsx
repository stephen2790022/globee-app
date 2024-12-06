import { ErrorType, TopCategory } from "../../store/rtkEndPoints/bookApi.types";
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
  const renderContent = () => {
    if (isLoadingTopCategoryData) return <Loader />;
    if (
      fetchTopCategoryDataError ||
      !topCategoryData?.sub_category_list?.length
    ) {
      return (
        <div>
          {fetchTopCategoryDataError?.message ||
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
  };

  return <StyledTab>{renderContent()}</StyledTab>;
};
