import { Fragment } from "react";
import { Book, ErrorType } from "../../store/rtkEndPoints/bookApi.types";
import { Loader } from "../UI/Loader/loader";
import {
  MainContainer,
  BookDetailsContainer,
  BookCover,
  BookInfoContainer,
  BookTitle,
  MetaInfo,
  ButtonGroup,
  StyledButton,
  FeaturesGrid,
  FeatureItem,
  FeatureIcon,
  FeatureLabel,
  Badge,
  MetaInfosWrapper,
} from "./book-details.style";
import { useBookDetailsView } from "./book-details.view";
import { BookDetailsHeader } from "./BookDetailsHeader/book-details-header.component";

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
        <BookDetailsContainer>
          <BookCover
            src={bookData?.img_url}
            alt={bookData?.name_book || "Book"}
          />
          <BookInfoContainer>
            <BookTitle>{bookData?.name_book}</BookTitle>
            <MetaInfosWrapper>
              <Badge>著者</Badge>
              <MetaInfo>{bookData?.author}</MetaInfo>
            </MetaInfosWrapper>
            <MetaInfo>
              <Badge>出版社</Badge> {bookData?.publisher}
            </MetaInfo>
            <ButtonGroup>
              <StyledButton onClick={handleBookmarkToggle}>
                {isBookmarked ? "MyBooks削除" : "MyBooks追加"}
              </StyledButton>
              <StyledButton $isPrimary>読み放題中</StyledButton>
            </ButtonGroup>
          </BookInfoContainer>
        </BookDetailsContainer>
        <FeaturesGrid>
          {featureIcons.map((feature) => (
            <FeatureItem key={feature.label}>
              <FeatureIcon>
                <img
                  src={feature.icon}
                  alt={feature.label}
                  style={{ width: "100%", height: "100%" }}
                />
              </FeatureIcon>
              <FeatureLabel>{feature.label}</FeatureLabel>
            </FeatureItem>
          ))}
        </FeaturesGrid>
      </MainContainer>
    </Fragment>
  );
};
