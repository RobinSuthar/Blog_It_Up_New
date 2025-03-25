import image from "../../../public/images/sait/SAIT-Atrium.webp";
import { useNavigate } from "react-router-dom";
const BlogPosted = () => {
  const naviagte = useNavigate();
  function handleClick() {
    naviagte("/specificblog");
  }
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-9  mt-12">
        <div className=" col-span-2 text-left p-2 ">
          <h2>Title</h2>
          <h1>Featured Post</h1>
          <h2>Date</h2>
          <p className="max-w-96">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post's
          </p>
          <span className="text-blue-600">Continue Reading</span>
        </div>
        <div className="col-span-2 align-middle ">
          <img src={image} width={700} alt="" />
        </div>
        <div></div>
        <div className=" col-span-2 text-left  ">
          <h2>Title</h2>
          <h1>Featured Post</h1>
          <h2>Date</h2>
          <p className="max-w-96">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post's
          </p>
          <span className="text-blue-600">
            <button onClick={handleClick}>Continue Reading</button>
          </span>
        </div>
        <div className="col-span-2">
          <img src={image} width={700} alt="" />
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-9  mt-12">
        <div className=" col-span-2 text-left p-2 ">
          <h2>Title</h2>
          <h1>Featured Post</h1>
          <h2>Date</h2>
          <p className="max-w-96">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post's
          </p>
          <span className="text-blue-600">Continue Reading</span>
        </div>
        <div className="col-span-2 align-middle ">
          <img src={image} width={700} alt="" />
        </div>
        <div></div>
        <div className=" col-span-2 text-left  ">
          <h2>Title</h2>
          <h1>Featured Post</h1>
          <h2>Date</h2>
          <p className="max-w-96">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post's
          </p>
          <span className="text-blue-600">Continue Reading</span>
        </div>
        <div className="col-span-2">
          <img src={image} width={700} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogPosted;
