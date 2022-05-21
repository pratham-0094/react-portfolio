import React from "react";
import Card from "./Card";
import { AccInfo, Address, ToDo, Firstmy, JuicyNYummy } from "../images/images";

function Project() {
  let projects = [
    {
      title: "Address Book",
      desc: "This is address book which allows the user to manage a list of contact information",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/pratham-0094/Address-Book",
      host: "",
      image: Address,
      tag: ["#PERSONAL", "#WEB"],
    },
    {
      title: "AccInfo",
      desc: "Server Moderation bot help to make server secure and away from threats",
      tech: ["HTML", "CSS ", "JAVASCRIPT"],
      link: "https://github.com/pratham-0094/AccInfo",
      host: "",
      image: AccInfo,
      tag: ["#PERSONAL", "#WEB"],
    },
    {
      title: "Firstmy",
      desc: "FirstMy is dedicated to preventing child abuse by strengthening, equipping, and restoring children and families in crisis. One Life at a Time.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://github.com/prakhar-5447/firstmy",
      host: "",
      image: Firstmy,
      tag: ["#TEAM", "#WEB"],
    },
    {
      title: "ToDo APP",
      desc: "ToDo is a kind of web app that generally used to maintain our day-to-day tasks or list everything that we have to do.",
      tech: ["HTML", "CSS", "TYPESCRIPT", "ANGULAR"],
      link: "https://github.com/pratham-0094/angular-project",
      host: "",
      image: ToDo,
      tag: ["#PERSONAL", "#WEB"],
    },
    {
      title: "Juicy-N-Yummy",
      desc: "It is an platform for restaurant aggregator and food delivery. It provides information, menus and user-reviews of restaurants.",
      tech: ["HTML", "CSS", "TYPESCRIPT", "MEAN"],
      link: "https://github.com/pratham-0094/Juicy-N-Yummy",
      host: "",
      image: JuicyNYummy,
      tag: ["#TEAM", "#WEB"],
    },
  ];

  return (
    <div className="container flex m-auto flex-wrap justify-evenly">
      {projects.map((e) => (
        <Card key={e.title} project={e} />
      ))}
    </div>
  );
}

export default Project;
