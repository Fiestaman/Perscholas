import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function App() {
  const arr = [
    {
      time: "11/12/20",
      datetime: "2020-11-12",
      title: "On the Street in Brooklyn",
      imgsrc: "./blog-image-1.jpg",
      alt: "Girl on street",
      text: "Sorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque deserunt cum nesciunt sapiente magnam saepe optio, officia modi, adipisci magni iusto consequatur ratione minus perspiciatis quis cupiditate earum ipsum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore porro fuga praesentium excepturi autem illo nisi, molestias blanditiis facere fugit doloremque deserunt magnam molestiae saepe. Architecto voluptatem pariatur vero. Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti est aliquid animi, asperiores culpa neque hic, et incidunt officiis nemo. Vitae sequi reiciendis totam eos eaque quam, maxime delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptas facere dolorem quia possimus sapiente quo ea eum animi. Quidem reprehenderit totam excepturi obcaecati qui saepe quo iure ea!",
    },
    {
      time: "11/11/20",
      datetime: "2020-11-11",
      title: "Vintage in Vogue",
      imgsrc: "./blog-image-2.jpg",
      alt: "Three people",
      text: "Sorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque deserunt cum nesciunt sapiente magnam saepe optio, officia modi, adipisci magni iusto consequatur ratione minus perspiciatis quis cupiditate earum ipsum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore porro fuga praesentium excepturi autem illo nisi, molestias blanditiis facere fugit doloremque deserunt magnam molestiae saepe. Architecto voluptatem pariatur vero. Temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti est aliquid animi, asperiores culpa neque hic, et incidunt officiis nemo. Vitae sequi reiciendis totam eos eaque quam, maxime delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas provident voluptas facere dolorem quia possimus sapiente quo ea eum animi. Quidem reprehenderit totam excepturi obcaecati qui saepe quo iure ea!",
    },
  ];
  const navLinks = [
    ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"],
    [
      "Home",
      "Women's",
      "Men's",
      "On the Street",
      "The Catwalk",
      "AdWatch",
      "About",
      "Tips",
    ],
  ];
  const [articles, setArticles] = useState(arr);

  return (
    <>
      <div className="App">
        <Header navLinks={navLinks[0]} ariaLabel="Main Navigation" />
        <Main articles={articles} />
        <Footer navLinks={navLinks[1]} ariaLabel="Foot Navigation" />
      </div>
    </>
  );
}
