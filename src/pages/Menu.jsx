import Heading from "../components/Heading";
import PageHeader from "../components/PageHeader";
import { Spacer } from "../components/Spacer";

import img from "../assets/images/food-and-drink.jpg";

const barList = {
  title: "bar",
  lists: [
    {
      title: "cocktails",
      items: [
        { name: "monkey sour", price: 10 },
        { name: "old fashioned", price: 11 },
        { name: "piña colada", price: 10 },
        { name: "mojito", price: 11 },
        { name: "bramble", price: 13 }
      ]
    },
    {
      title: "bottled beer",
      items: [
        { name: "indian pale ale", price: 4 },
        { name: "larger beer", price: 3.5 },
        { name: "bitter", price: 4 },
        { name: "stout", price: 5 },
        { name: "caramel ale", price: 5.5 }
      ]
    },
    {
      title: "beer on tap",
      items: [
        { name: "blue style", price: 5 },
        { name: "boutique ipa", price: 6 },
        { name: "absolute porter", price: 7 },
        { name: "belgian dream", price: 8 },
        { name: "beer boutique larger", price: 9 }
      ]
    }
  ]
};

const foodList = {
  title: "food",
  lists: [
    {
      title: "snacks",
      items: [
        { name: "spicy nachos", price: 15 },
        { name: "fish & chips", price: 12 },
        { name: "fried calamary", price: 12 },
        { name: "chicken wrap", price: 18 },
        { name: "mach & cheese bites", price: 10 }
      ]
    },
    {
      title: "burger",
      items: [
        { name: "classic burger", price: 14 },
        { name: "beef king", price: 18 },
        { name: "double cheeseburger", price: 22 },
        { name: "chicken burger", price: 15 },
        { name: "boutique burger", price: 19 }
      ]
    },
    {
      title: "meat",
      items: [
        { name: "sesame chicken strips", price: 13 },
        { name: "hot wings", price: 15 },
        { name: "lamb gyro", price: 20 },
        { name: "lamb chops", price: 22 },
        { name: "pan roasted pork chop", price: 23 }
      ]
    }
  ]
};

const Menu = () => {
  return (
    <>
      <PageHeader text="menu" />
      <Spacer />
      <Lists {...barList} />
      <Spacer />
      <img src={img} alt="food and drinks" className="tw--section-center" />
      <Spacer />
      <Lists {...foodList} />
      <Spacer />
    </>
  );
};

export default Menu;

const List = ({ title, items }) => {
  return (
    <div className="my-20 text-4xl">
      <p className="font-teko uppercase text-yellow-custom text-5xl">{title}</p>
      <ul>
        {items.map(({ name, price }) => (
          <li key={title + name} className="my-6">
            <div className="flex flex-row">
              <p className="font-teko uppercase">{name}</p>
              <div className="flex-1 border-b-2 border-[#696969] border-dotted h-[1em]"></div>
              <p className="font-teko uppercase text-yellow-custom before:content-['$']">
                {Number.isInteger(price) ? price : price.toFixed(2)}
              </p>
            </div>
            <div className="text-secondary text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Caret = ({ className }) => {
  return (
    <div
      className={
        "absolute top-[60%] w-[20px] h-[20px] border-t-2 border-l-2 border-white cursor-pointer " +
        className
      }
    ></div>
  );
};

const Lists = ({ title, lists }) => {
  return (
    <section className="tw--section-center relative">
      <Caret className="-rotate-45 -left-[5%]" />
      <Caret className="rotate-[135deg] -right-[5%]" />
      <div className="text-center">
        <Heading subtitle={title} title={title + " menu"} />
        <p className="mt-2 text-secondary text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
          aliquid!
        </p>
      </div>
      <div className="overflow-x-hidden">
        <div className="menu-lists-container">
          <List {...lists[lists.length - 1]} />
          {lists.map(list => (
            <List {...list} />
          ))}
          <List {...lists[0]} />
        </div>
      </div>
    </section>
  );
};
