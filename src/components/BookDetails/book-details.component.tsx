import { Fragment } from "react";
import { Book, ErrorType } from "../../store/rtkEndPoints/bookApi.types";
import { Loader } from "../UI/Loader/loader";
import { MainContainer, MetaInfo } from "./book-details.style";
import { useBookDetailsView } from "./book-details.view";
import { BookDetailsHeader } from "./BookDetailsHeader/book-details-header.component";
import { BookInfos } from "./BookInfos/book-infos.component";
import { Features } from "./Features/feature.component";

type BookDetailsProps = {
  bookData: Book | null;
  isLoadingTopCategoryData: boolean;
  fetchTopCategoryDataError: ErrorType;
};

export const BookDetails = ({
  bookData,
  isLoadingTopCategoryData,
  fetchTopCategoryDataError,
}: BookDetailsProps) => {
  const { featureIcons, isBookmarked, handleBookmarkToggle } =
    useBookDetailsView({ bookData });

  if (isLoadingTopCategoryData) return <Loader />;
  if (
    fetchTopCategoryDataError ||
    (bookData && !Object.keys(bookData).length)
  ) {
    return (
      <MainContainer>
        <MetaInfo>
          {fetchTopCategoryDataError?.message ||
            "データが見つかりませんでした。"}
        </MetaInfo>
      </MainContainer>
    );
  }

  return (
    <Fragment key="BookDetailsPage">
      <BookDetailsHeader />
      <MainContainer>
        <BookInfos
          bookData={bookData}
          isBookmarked={isBookmarked}
          handleBookmarkToggle={handleBookmarkToggle}
        />
        <Features featureIcons={featureIcons} />
      </MainContainer>
    </Fragment>
  );
};
