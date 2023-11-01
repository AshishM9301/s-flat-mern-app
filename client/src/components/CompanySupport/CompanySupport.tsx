import {
  faHeadphonesSimple,
  faTags,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import CompanySupportCard from "../CompanySupportCard/CompanySupportCard";

import styles from "./CompanySupport.module.css";

interface Props {
  bgColor?: string;
}

const CompanySupport = ({ bgColor }: Props) => {
  const cards = [
    {
      title: "Product Support",
      description:
        "Up to 3 years on-site warranty available for your peace of mind.",
      icon: faHeadphonesSimple,
    },
    {
      title: "Personal Account",
      description:
        "With big discounts, free delivery and a dedicated support specialist.",
      icon: faUserCheck,
    },
    {
      title: "Amazing Savings",
      description:
        "Up to 70% off new Products, you can be sure of the best price.",
      icon: faTags,
    },
  ];

  return (
    <div
      style={{ backgroundColor: bgColor ? bgColor : "#fff", padding: "60px 0" }}
    >
      <div className={styles.container}>
        <div className={styles.flex}>
          {cards.map((item, index) => (
            <CompanySupportCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              key={index.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySupport;
