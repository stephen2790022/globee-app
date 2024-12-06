import { Book } from "../../store/rtkEndPoints/bookApi.types";
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

type BookDetailsProps = {
  bookData: Book | null;
};

export const BookDetails = ({ bookData }: BookDetailsProps) => {
  const { featureIcons } = useBookDetailsView();

  return (
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
            <StyledButton>Button 1</StyledButton>
            <StyledButton $isPrimary>Button 2</StyledButton>
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
  );
};
