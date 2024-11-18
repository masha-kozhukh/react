import "./App.css";
import { Services, ServicesProps } from "./components/Services";
import { Information, InformationProps } from "./components/Information";
import { ThreeCubes } from "./icons/ThreeCubes";
import { Cubes } from "./icons/Cubes";
import { Briefcase } from "./icons/Briefcase";
import { ThreeLayer } from "./icons/ThreeLayer";
import { Button } from "./components/Button";
import React from "react";
import { Artist } from "./icons/Artist";
import { Accordion, AccordionsProps } from "./components/Accordion";
import { ToDoList, ListsProps } from "./components/ToDoList";

const lists: ListsProps = {
  initialItems: [
    { id: 1, text: "item1" },
    { id: 2, text: "item2" },
    { id: 3, text: "item3" },
  ],
  subtitle: "Our list",
  title: "To Do List",
  placeholder: "placeholder",
  classNameAddButton: "addButton",
  buttonTextAdd: "add list",
  buttonTextRemove: "remove item",
  buttonTextSave:"Save",
  buttonTextEdit:"Edit" 
};

const accordions: AccordionsProps = {
  contents: [
    {
      name: "Design",
      text: "a plan or drawing produced to show the look and function",
      id: 0,
    },
    {
      name: "Design",
      text: "a plan or drawing produced to show the look and function",
      id: 1,
    },
    {
      name: "Design",
      text: "a plan or drawing produced to show the look and function",
      id: 2,
    },
  ],
  subtitle: "Our accordions",
  title: "Why People Choose Accordions",
};

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
  blocks: [
    {
      subtitle: "Design Things ",
      title: "We Loves To Design Your Creative Ideas",
      text: "A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages ",
      id: 0,
      icon: <Artist />,
    },
    {
      subtitle: "Our Teamwork ",
      title: "We Believe Success Lies On Teamwork",
      text: "Good teamwork means a synergistic way of working with each person committed and working towards a shared goal. ... It is therefore a necessity that leaders facilitate and build the teamwork skills of their people if they are",
      id: 1,
      icon: <Artist />,
    },
  ],
  title: "We Loves To Design Your Creative Ideas",
  link: {
    href: "#",
    name: "Learn more",
  },
};
const hooks = {
  useShowInformationButtonHandler() {
    const [showInformation, setShowInformation] = React.useState<boolean>(true);

    const onShowInformationClick = React.useCallback(() => {
      setShowInformation((previousState: boolean) => !previousState);
    }, []);

    return {
      showInformation,
      onShowInformationClick,
    };
  },
};
function App() {
  const { onShowInformationClick, showInformation } =
    hooks.useShowInformationButtonHandler();

  return (
    <div className="container">
      {/* <Services */}
      {/* professions={services.professions}*/}
      {/*    subtitle={services.subtitle}*/}
      {/*    title={services.title}*/}
      {/*/> */}
      <ToDoList {...lists} />
      <Accordion {...accordions} />
      <Services {...services} />
      <Button onClick={onShowInformationClick} name="hide" />
      {showInformation && <Information {...information} />}
    </div>
  );
}

export default App;
