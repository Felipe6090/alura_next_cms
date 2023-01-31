import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { HeroSection } from "./HeroSection";
import { PageFAQDisplay } from "./PageFAQDisplay.js";
import { SEOBlock } from "./SeoBlock";

export const cmsSections = {
  CommonSeoBlockRecord: SEOBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  CommonFooterRecord: (props) => <Footer {...props} />,
  PagehomeHerosectionRecord: HeroSection,
  PagefaqDisplayquestionSectionRecord: PageFAQDisplay,
};
