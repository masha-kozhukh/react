import "./App.css";
import { Services, ServicesProps } from "./components/Services";
import { Information, InformationProps } from "./components/Information";
import { ThreeCubes } from "./icons/ThreeCubes";
import { Cubes } from "./icons/Cubes";
import { Briefcase } from "./icons/Briefcase";
import { ThreeLayer } from "./icons/ThreeLayer";

const services: ServicesProps = {
  professions: [
    {
      name: "Design",
      text: "a plan or drawing produced to show the look and function",
      id: 0,
      icon: <ThreeCubes />,
    },
    {
      name: "Development",
      text: "Development is defined as the process of growth or new ",
      id: 1,
      icon: <Cubes />,
    },
    {
      name: "Branding",
      text: "The marketing practice of creating a name, symbol or ",
      id: 2,
      icon: <Briefcase />,
    },
    {
      name: "Illustration",
      text: "An illustration is a decoration, interpretation or visual",
      id: 3,
      icon: <ThreeLayer />,
    },
  ],
  subtitle: "Our Services",
  title: "Why People Choose Us",
  link: {
    href: "#",
    name: "Learn more",
  },
};

const information: InformationProps = {
  subtitle: "Design Things ",
  title: "We Loves To Design Your Creative Ideas",
  text: "A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages ",
  src: "https://i.imgur.com/QIrZWGIs.jpg",
  alt: "Alan L. Hart",
};

function App() {
  return (
    <div className="container">
      {/*<Services */}
      {/*    professions={services.professions}*/}
      {/*    subtitle={services.subtitle}*/}
      {/*    title={services.title}*/}
      {/*/>*/}

      <Services {...services} />
      <Information {...information} />
    </div>
  );
}

export default App;