import { Book } from "../../../store/rtkEndPoints/bookApi.types";
import { MetaInfo, MetaInfosWrapper } from "../book-details.style";
import {
  BookDetailsContainer,
  BookCover,
  BookInfoContainer,
  BookTitle,
  ButtonGroup,
  StyledButton,
  Badge,
} from "./book-infos.style";

type BookInfosProps = {
  bookData: Book | null;
  isBookmarked: boolean;
  handleBookmarkToggle: () => void;
};

export const BookInfos = ({
  bookData,
  isBookmarked,
  handleBookmarkToggle,
}: BookInfosProps) => {
  return (
    <BookDetailsContainer>
      <BookCover src={bookData?.img_url} alt={bookData?.name_book || "Book"} />
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
  );
};
