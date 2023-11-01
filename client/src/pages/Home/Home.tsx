import AdBanner from "../../components/AdBanner/AdBanner";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import BlogList from "../../components/BlogList/BlogList";
import CategoryProductList from "../../components/CategoryProductList/CategoryProductList";
import NewProductSlider from "../../components/NewProductSlider/NewProductSlider";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import SponsorBanner from "../../components/SponsorBanner/SponsorBanner";

import styles from "./Home.module.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>
        <BannerSlider
          images={[
            {
              imgUrl:
                "https://images.unsplash.com/photo-1682686581221-c126206d12f0",
              bannerTitle: "Score a Gaming Monitor",
            },
            {
              imgUrl:
                "https://images.unsplash.com/photo-1697462248416-9671bbbf60ce",
              bannerTitle: "Score a Gaming Monitor",
            },
          ]}
        />
      </div>
      <div>
        <NewProductSlider />
      </div>
      <div>
        <AdBanner />
      </div>
      <div className={styles.categoryProducts}>
        <div>
          <CategoryProductList
            title="Custom Build"
            imgUrl="https://images.unsplash.com/photo-1601153211050-ae2e1fa428d7"
          />
        </div>
        <div>
          <CategoryProductList
            title="MSI Laptops"
            imgUrl="https://images.unsplash.com/photo-1601153211050-ae2e1fa428d7"
          />
        </div>
        <div>
          <CategoryProductList
            title="Desktops"
            imgUrl="https://images.unsplash.com/photo-1601153211050-ae2e1fa428d7"
          />
        </div>
      </div>
      <div>
        <SponsorBanner />
      </div>
      <div>
        <BlogList />
      </div>
      <div>
        <ReviewSlider />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
