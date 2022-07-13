import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // const myLinks= React.createElement("a", {href:"#link"}, "link")
  const theLinks= links.map((link)=>{
    return <a key={link} href={"#" + link}>{link}</a>
  })

  return (
    <nav>
      {theLinks}
    </nav>
  );
}

export default NavBar;
