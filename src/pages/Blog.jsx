import React, { useContext, useEffect, useRef, useState } from "react";
import Heading from "../components/Heading";
import { Spacer, SpacerSm } from "../components/Spacer";

import img from "../assets/images/bar.jpg";

const ToggleContext = React.createContext();

// there should be an api call to fetch blog posts
// I'll just hard code them for now
const blogPostProps = {
  image: img,
  type: "filler",
  title: "404 title not found",
  author: "No one",
  dateString: "2022-10-21"
};

const Blog = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const toggleModal = props => {
    setIsModalActive(prev => !prev);
    setModalDetails(props ?? {});
  };

  return (
    <>
      <Spacer />
      <ToggleContext.Provider value={toggleModal}>
        <Grid />
        <Flex />
        {isModalActive && <Modal {...modalDetails} />}
      </ToggleContext.Provider>
    </>
  );
};

export default Blog;

const AuthorDate = ({ author, date }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <p className="before:content-['By_'] before:text-yellow-custom before:font-combo">
        {author}
      </p>
      <div className="bg-yellow-custom w-1 h-[1.2em] rounded-full"></div>
      <p>{date}</p>
    </div>
  );
};

const Post = ({ image, type, title, author, dateString }) => {
  const toggleModal = useContext(ToggleContext);

  const formattedDate = new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div
      onClick={() =>
        toggleModal({ image, type, title, author, date: formattedDate })
      }
      className="relative cursor-pointer"
    >
      <img
        src={image}
        alt="blog photo"
        className="rounded-xl object-cover w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-xl">
        <Heading subtitle={type} title={title} />
        <AuthorDate author={author} date={formattedDate} />
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

const Modal = ({ image, type, title, author, date }) => {
  const toggleModal = useContext(ToggleContext);
  const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      ref.current.classList.remove("opacity-0");
    }, 0);

    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      onClick={() => {
        ref.current.classList.add("opacity-0");
        ref.current.classList.add("pointer-events-none");
        setTimeout(() => {
          toggleModal();
        }, 150);
      }}
      ref={ref}
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 overflow-auto opacity-0 z-[2] transition-opacity"
    >
      <div className="tw--section-center bg-neutral-900  bg-opacity-90 mt-10 py-8 px-20 block">
        <img
          src={image}
          alt="blog photo"
          className="w-full max-h-[450px] object-cover"
        />
        <SpacerSm />
        <Heading subtitle={type} title={title} />
        <AuthorDate author={author} date={date} />
        <Spacer />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          doloremque pariatur debitis corrupti corporis nobis officiis quidem
          quod id, nulla ipsa iusto atque cum possimus, officia hic at ad
          perferendis voluptatibus necessitatibus. Debitis laudantium quia nihil
          sed distinctio modi alias numquam culpa a sequi, in minima, velit
          deserunt vel pariatur ex nam? Doloremque modi obcaecati culpa ea
          repellendus vitae laborum, odit dolor saepe amet vel molestiae sequi.
          Voluptates vitae commodi perspiciatis non dolores, alias eveniet
          eligendi voluptate odio culpa doloremque impedit, assumenda quasi ad
          repellat. Culpa et ab atque. Dolore optio inventore libero cupiditate
          quae temporibus unde quos excepturi! Facilis consequuntur, nemo ex
          enim quaerat eligendi. Distinctio, quae. Eaque sint ipsam repudiandae
          impedit. Laborum rerum molestiae maiores cupiditate earum consequuntur
          quo, esse eaque voluptatibus veritatis ipsam officiis consequatur. Ex
          saepe qui quaerat aut reiciendis officia nulla corporis, architecto
          laborum eos incidunt unde officiis suscipit odio impedit illo itaque.
          Praesentium aut nemo at error debitis ab laudantium amet reprehenderit
          maxime pariatur quo laboriosam quam omnis, ipsum est eaque culpa ea
          nostrum eligendi ut maiores voluptatibus! Quis atque alias blanditiis
          quia consequatur pariatur cum ratione aut amet fugit modi quod,
          aperiam mollitia quidem magnam similique aspernatur porro earum
          suscipit corporis id ab culpa! Quidem labore, natus laboriosam
          molestias repellat explicabo a quis, ab obcaecati assumenda amet,
          ipsam totam quaerat animi autem veniam minus eveniet unde delectus
          quae expedita? Iusto cumque, officia facere architecto assumenda
          consectetur labore earum dicta perspiciatis velit vero necessitatibus
          consequatur omnis a ratione ullam obcaecati tenetur, minima
          perferendis suscipit ipsam eius esse fuga. Architecto voluptatum
          asperiores nulla voluptatem mollitia? Veritatis ea, repellat ipsam
          repellendus vitae corrupti quis, fugit in laudantium modi, iure eum
          numquam expedita? In impedit, hic est, obcaecati numquam amet
          recusandae molestias reiciendis, debitis pariatur aut libero
          repudiandae labore explicabo. Quaerat iure dolorem dicta, voluptates
          explicabo earum?
        </p>
      </div>
    </div>
  );
};
