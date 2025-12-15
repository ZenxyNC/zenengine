import { useState } from "react";
import Navbar from "./components/navside/navbar";
import NavSide from "./components/navside/navside";
import './docs.css';
import './zenengine-demo/demo.global.style.css';
import { useParams } from "react-router-dom";

// Demo Components
import SnackbarDemo from "./zenengine-demo/snackbar/snackbar";

export default function Docs() {
  const { module } = useParams();
  const [navSide, setNavSide] = useState(false);

  const modules = [
    {
      param: "snackbar",
      component: <SnackbarDemo />
    }
  ]

  function findModule(ModuleParam) {
    for (var i = 0; i < modules.length; i++) {
      var moduleProp = modules[i]
      if(moduleProp.param === ModuleParam) {
        return moduleProp.component
      }
    }
    console.warn("[SYS] Module is not in list.")
    return
  }

  return (
    <>
      <Navbar
        navSide={navSide}
        setNavSide={setNavSide}
      />
      <div id="docs-maindiv">
        <NavSide 
          navSide={navSide}
          setNavSide={setNavSide}
        />
        <div id="docs-codediv">
          {findModule(module)}
        </div>
      </div>
    </>
  )
}