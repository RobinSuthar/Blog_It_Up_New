import { SonnerDemo } from "../democomponents/SonnerDemo";
import Topic from "../components/blogitup/topic";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

import addImage from "../../public/images/sait/add_24dp_999999_FILL0_wght400_GRAD0_opsz24.png";
import BlogPosted from "../components/blogitup/blog-posted";

const Result = () => {
  const navigation = useNavigate();

  function handleClick() {
    navigation("/postblog");
  }

  return (
    <div className="ml-32 mr-32 p-2">
      <Topic />
      <SonnerDemo />
      <div className="mt-16   absolute right-10 bottom-7 z-10 ">
        <Button size={"lg"} onClick={handleClick} variant="outline">
          <div>
            <img src={addImage} alt="" width={30} />
          </div>
        </Button>
      </div>
      <BlogPosted />
    </div>
  );
};

export default Result;
