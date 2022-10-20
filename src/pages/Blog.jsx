import React, { useContext } from "react";
import Spacer from "../components/Spacer";
import Heading from "../components/Heading";

import img from "../assets/images/bar.jpg";

const ToggleContext = React.createContext();

const Blog = () => {
  const toggleModal = () => {
    console.log("Dc ai dat toggle? Ha?");
  };

  return (
    <>
      <Spacer />
      <ToggleContext.Provider value={toggleModal}>
        <Grid />
        <Flex />
      </ToggleContext.Provider>
    </>
  );
};

export default Blog;

// there should be an api call to fetch blog posts
// I'll just hard code them for now
const blogPostProps = {
  image: img,
  type: "filler",
  title: "404 title not found",
  author: "No one",
  dateString: "2022-09-24"
};

const Post = ({ image, type, title, author, dateString }) => {
  const toggleModal = useContext(ToggleContext);

  const dateFormat = new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div onClick={toggleModal} className="relative cursor-pointer">
      <img
        src={image}
        alt="blog photo"
        className="rounded-xl object-cover w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-xl">
        <Heading subtitle={type} title={title} />
        <div className="flex items-center justify-start gap-2">
          <p className="before:content-['By_'] before:text-yellow-custom before:font-combo">
            {author}
          </p>
          <div className="bg-yellow-custom w-1 h-[1.2em] rounded-full"></div>
          <p>{dateFormat}</p>
        </div>
      </div>
    </div>
  );
};

const Grid = () => {
  return (
    <div className="tw--section-center grid auto-cols-[300px] gap-4 grid-cols-[4fr,3fr] grid-rows-2 text-base [&>:first-child]:row-span-full">
      <Post {...blogPostProps} />
      <Post {...blogPostProps} />
      <Post {...blogPostProps} />
    </div>
  );
};

const Flex = () => {
  return (
    <div className="tw--section-center mt-4 flex items-center justify-center gap-4 flex-wrap [&>*]:w-[calc((100%-2rem)/3)]">
      <Post {...blogPostProps} />
      <Post {...blogPostProps} />
      <Post {...blogPostProps} />
      <Post {...blogPostProps} />
      <Post {...blogPostProps} />
    </div>
  );
};
