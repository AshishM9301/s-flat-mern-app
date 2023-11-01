import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogList.module.css";

const BlogList = () => {
  const blogs = [1, 2, 3, 4];
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.titleText}>
          <p>Follow us on Instagram for News, Offers & More</p>
        </div>
        <div className={styles.blogs}>
          {blogs.map((item, index) => (
            <div>
              <BlogCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
