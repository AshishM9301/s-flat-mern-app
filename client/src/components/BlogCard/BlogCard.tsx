import styles from "./BlogCard.module.css";

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://images.unsplash.com/photo-1682686581295-7364cabf5511"
          alt="blog-carg-img"
          className={styles.img}
        />
      </div>
      <div className={styles.blogTitleText}>
        <p>
          If you’ve recently made a desktop PC or laptop purchase, you might
          want to consider adding peripherals to enhance your home office setup,
          your gaming rig, or your business workspace
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
