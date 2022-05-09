import React from "react";
import Card from "./Card";

function Project() {
  let projects = [
    {
      title: "Address Book",
      desc: "This is address book which allows the user to manage a list of contact information",
      tech: ["HTML", "CSS", "JAVASCRIPT", "PHP", "MYSQL"],
      link: "https://github.com/pratham-0094/Address-Book",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#PERSONAL", "#WEB"],
    },
    {
      title: "AccInfo",
      desc: "Server Moderation bot help to make server secure and away from threats",
      tech: ["HTML", "CSS ", "JAVASCRIPT"],
      link: "https://github.com/pratham-0094/AccInfo",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
      tag: ["#PERSONAL"],
    },
    {
      title: "Firstmy",
      desc: "FirstMy is dedicated to preventing child abuse by strengthening, equipping, and restoring children and families in crisis. One Life at a Time.",
      tech: ["HTML", "CSS", "JAVASCRIPT", "MERN"],
      link: "https://github.com/prakhar-5447/firstmy",
      host: "",
      // image: "https://raw.githubusercontent.com/prakhar-5447/firstmy/master/src/images/bg3.jpg",
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
