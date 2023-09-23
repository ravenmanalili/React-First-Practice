import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title}) => { {/* yung pinass mong value from homw, ilalagay mo sa props container then after ipapass mo yung value nya sa blogs tulad ng nasa baba */}
// const blogs = props.blogs;
// const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>  
            {/* The key prop is essential for React to efficiently update and manage lists of elements. */}
              <Link to = {`/blogs/${blog.id}`} >
                 {/* you are using javascript here to link the blog with its current id 
                    LINK is still considered as anchor tab in CSS
                 */}
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
              </Link>
            </div>
          ))}
        </div>
     );
}
 
export default BlogList ;