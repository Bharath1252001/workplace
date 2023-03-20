import React from "react";
import Cards from "../Candidate/Common/Cards/Cards";
import micon from "../../Images/micon.png";
import dicon from "../../Images/dicon.png";
import hicon from "../../Images/hicon.png";
import ficon from "../../Images/ficon.png";
import gicon from "../../Images/gicon.png";
import bicon from "../../Images/bicon.png";
import cicon from "../../Images/cicon.png";
import picon from "../../Images/picon.png";

function OnePlatform() {
  const data = [
    {
      title: "Marketing & Communication",
      subtitle: "230 Jobs Available",
      icon: micon,
    },
    {
      title: "Design & Development",
      subtitle: "231 Jobs Available",
      icon: dicon,
    },
    {
      title: "Human Research & Development",
      subtitle: "232 Jobs Available",
      icon: hicon,
    },
    {
      title: "Finance & Management",
      subtitle: "233 Jobs Available",
      icon: ficon,
    },
    {
      title: "Government Jobs",
      subtitle: "234 Jobs Available",
      icon: gicon,
    },
    {
      title: "Business & Consulting",
      subtitle: "235 Jobs Available",
      icon: bicon,
    },
    {
      title: "Customer Support Care",
      subtitle: "236 Jobs Available",
      icon: cicon,
    },
    {
      title: "Project Management",
      subtitle: "237 Jobs Available",
      icon: picon,
    },
  ];
  return (
    <>
      <div className="one-platform-container">
        <h1>
          One Platform Many <span>Solutions</span>
        </h1>

        <div>
          {data.map((item, index) => {
            return (
              <Cards
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OnePlatform;
