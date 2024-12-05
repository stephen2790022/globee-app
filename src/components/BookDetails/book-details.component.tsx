import { Book } from "../../store/rtkEndPoints/bookApi.types";
import {
  MainContainer,
  BookDetailsWrapper,
  BookCover,
  BookDetailsInfosWrapper,
  BookTitle,
  MetaInfo,
  ButtonGroup,
  StyledButton,
  FeaturesGrid,
  FeatureItem,
  FeatureIcon,
  FeatureLabel,
  Badge,
} from "./book-details.style";
import { useBookDetailsView } from "./book-details.view";

type BookDetailsProps = {
  bookData: Book | null;
};

export const BookDetails = ({ bookData }: BookDetailsProps) => {
  const { featureIcons } = useBookDetailsView();
  return (
    <MainContainer>
      <BookDetailsWrapper>
        <BookCover src={bookData?.img_url} />
        <BookDetailsInfosWrapper>
          <BookTitle>{bookData?.name_book}</BookTitle>
          <MetaInfo>
            <Badge>著者</Badge> ヒロ前田、テッド寺倉、ロス・タロック
          </MetaInfo>
          <MetaInfo>
            <Badge>出版社</Badge> アルク
          </MetaInfo>
          <ButtonGroup>
            <StyledButton>Button 1</StyledButton>
            <StyledButton isPrimary>Button 2</StyledButton>
          </ButtonGroup>
        </BookDetailsInfosWrapper>
      </BookDetailsWrapper>
      <FeaturesGrid>
        {featureIcons.map((feature) => (
          <FeatureItem key={feature.label}>
            <FeatureIcon>
              <img
                src={feature.icon}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </FeatureIcon>
            <FeatureLabel>{feature.label}</FeatureLabel>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </MainContainer>
  );
};
