import { FeatureIcons } from "../book-details.view";
import {
  FeatureIcon,
  FeatureItem,
  FeatureLabel,
  FeaturesGrid,
} from "./feature.style";

type FeatureProps = {
  featureIcons: FeatureIcons[];
};

export const Features = ({ featureIcons }: FeatureProps) => {
  return (
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
  );
};
