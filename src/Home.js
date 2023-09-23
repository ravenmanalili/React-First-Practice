import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); // data:blogs - trinatransfer lang value



  return (
    <div className="home">
      <div>
        {error && <div>{error}</div>}
        {isPending && <div> Loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs " />} 
         {/* Magrurun lang to if may laman si blogs which originally null || check comment below */}
         {/* The double ampersand && is a logical AND operator in JavaScript. It evaluates the expressions on both sides and returns the result of the second expression if the first expression is truthy. If the first expression is falsy, it returns the result of the first expression.*/}
          {/* <button onClick={() => setName('luigi')}>Change name</button>  */}
          
           {/* pinapass mo value ng blogs sa taas dito sa new blogs container then gagamitin mo sya sa BlogList.js */}
 
      </div>
    </div>
  );
}
 
export default Home;