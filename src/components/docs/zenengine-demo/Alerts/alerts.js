import { useState } from "react";
import TabSelect from "../components/tabSelect";
import Review from "../components/review";
import Code from "../components/code";

import ZenEngineAlert from "./demo";

export default function AlertsDemo() {
  const [state, setState] = useState("review");
  const [codeType, setCodeType] = useState("css");
  const [alertStructure, setAlertStructure] = useState({
    isOpened: false,
    title: "",
    type: "information",
    placeholder: "",
    response: {
      ok: false,
      object: null
    }
  });

  function openAlert(type) {
    setAlertStructure({
      isOpened: true,
      type: type,
      title: null,
      placeholder: "Project ID",
      response: {
        ok: false,
        object: ""
      }
    })
  }

  const codes = {
    Dependencies: `npm install react-icons`,
    Call:`import ZenEngineAlert from "./zenengine/alerts";
import { useEffect, useState } from "react";

export default function App() {
  const [AlertStructure, setAlertStructure] = useState({
    isOpened: false,
    type: "success",
    title: "Operation Success",
    message: "The operation has been completed successfully.",
    placeholder: "Enter text...",
    actionOk: () => {
      console.log("Ok");
    },
    actionCancel: () => {
      console.log("Cancel");
    }
  });


  function openAlert(type) {
    setAlertStructure(prev => ({
      ...prev,
      isOpened: true,
    }))
  }


  return (
    <ZenEngineAlert
      AlertStructure={alertStructure}
      setAlertStructure={setAlertStructure}
    >
      Your Alert Message Here. <br/>
      You can use any HTML elements.
    </ZenEngineAlert>
  )
}
`,
    JS:`import { useEffect, useState } from "react";
import "./alerts.css"
import { 
  IoCheckmark,
  IoClose,
  IoAlert,
  IoHelp,
  IoInformation,
  IoExtensionPuzzle
} from "react-icons/io5";

export default function ZenEngineAlert({ AlertStructure, setAlertStructure, children }) {
  const [inputValue, setInputValue] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#F5F5F5");
  const [buttonText, setButtonText] = useState({
    primary: "Ok",
    secondary: "Cancel"
  });

  useEffect(() => {
    switch (AlertStructure.type || "information") {
      case "success":
        setPrimaryColor("#007AFF");
        setButtonText({
          primary: "Ok",
          secondary: false
        });
        break;
      case "error":
        setPrimaryColor("#FF393D");
        setButtonText({
          primary: "Ok",
          secondary: "Cancel"
        });
        break;
      case "warning":
        setPrimaryColor("#FFCC00");
        setButtonText({
          primary: "Ok",
          secondary: "Cancel"
        });
        break;
      case "confirmation":
        setPrimaryColor("#FFCC00");
        setButtonText({
          primary: "Yes",
          secondary: "Cancel"
        });
        break;
      case "information":
        setPrimaryColor("#F5F5F5");
        setButtonText({
          primary: "Ok",
          secondary: false
        });
        break;
      case "input":
        setPrimaryColor("#F5F5F5");
        setButtonText({
          primary: "Ok",
          secondary: "Cancel"
        });
        break;
      default:
        setPrimaryColor("#F5F5F5");
    }
  }, [AlertStructure.type])

  function getIconByType(type) {
    switch (type) {
      case "success":
        return <IoCheckmark size={32} color={primaryColor}/>
      case "error":
        return <IoClose size={32} color={primaryColor}/>
      case "warning":
        return <IoAlert size={32} color={primaryColor}/>
      case "confirmation":
        return <IoHelp size={32} color={primaryColor}/>
      case "information":
        return <IoInformation size={32} color={primaryColor}/>
      case "input":
        return <IoExtensionPuzzle size={32} color={primaryColor}/>
      default:
        return <IoExtensionPuzzle size={32} color={primaryColor}/>
    }
  }

  function HandlePrimaryButton() {
    setAlertStructure((prev) => ({
      ...prev,
      isOpened: false,
    }));
    AlertStructure.actionOk(inputValue);
  }

  function HandleSecondaryButton() {
    setInputValue("")
    setAlertStructure((prev) => ({
      ...prev,
      isOpened: false,
    }));
    AlertStructure.actionCancel(inputValue);
  }

  return (
    <>
      <div id="alert-background" className={AlertStructure.isOpened ? "" : "hide"}>
        <div id="alert-mainbody" className={AlertStructure.type || "information"}>
          <div id="alert-type">
            <div id="alert-icon" className={AlertStructure.type || "information"}>
              {getIconByType(AlertStructure.type || "information")}
            </div>
            <h2 id="alert-title">{AlertStructure.title ? AlertStructure.title : AlertStructure.type.replace(/^./, (char) => char.toUpperCase())}</h2>
          </div>
          {
            AlertStructure.type === "input" ? (
              <input 
                type="text"
                placeholder={AlertStructure.placeholder}
                id="alert-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            ) : (
              children
            )
          }
          <div id="alert-buttons">
            <button 
              id="alert-button-secondary" 
              style={{ visibility: buttonText.secondary ? "visible" : "hidden" }}
              onClick={HandleSecondaryButton}
            >
              {buttonText.secondary}
            </button>

            <button 
              id="alert-button-primary" 
              style={{ backgroundColor: AlertStructure.type === "confirmation" ? "rgb(255, 204, 0, 0.8)" : "rgb(0, 122, 255, 0.8)" }}
              onClick={HandlePrimaryButton}
            >
              {buttonText.primary}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
`,
    CSS:`/*===== Resets =====*/
#alert-mainbody p {
  margin: 0;
  padding: 0;
}

/* ===== Alert Background ===== */
#alert-background {
  width: 100dvw;
  height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6); /*000000, 60%*/
  backdrop-filter: blur(16px);
  opacity: 1;
  pointer-events: all;

  transition: 0.2s;
}

#alert-background.hide {
  opacity: 0;
  pointer-events: none;
}

/*===== Alert Main Body =====*/
#alert-mainbody {
  width: calc(100vw - 64px - 64px)
    /*100vw - margin-right - margin-left - padding-right - padding-left*/
  ;
  max-width: 400px;
  height: max-content;
  min-height: 220px;

  padding: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 16px;

  background-color: rgb(15, 19, 26, 0.8); /*0F131A, 80%*/
  backdrop-filter: blur(16px);

  border-radius: 32px;
  border: 1px solid rgb(245, 245, 245, 0.2); /*F5F5F5, 20%*/
}

#alert-mainbody.success {
  border-color: rgb(0, 122, 255, 0.2); /*007AFF, 20%*/
}

#alert-mainbody.error {
  border-color: rgb(255, 57, 61, 0.2); /*FF393D, 20%*/
}

#alert-mainbody.warning,
#alert-mainbody.confirmation {
  border-color: rgb(255, 204, 0, 0.2); /*FFCC00, 20%*/
}

#alert-mainbody.input,
#alert-mainbody.information {
  border-color: rgb(245, 245, 245, 0.2); /*F5F5F5, 20%*/
}


/*===== Alert Type (Icon & Title) =====*/
#alert-type {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: max-content;
  height: 60px;
}

#alert-title {
  font-size: 28px !important;
  color: #F5F5F5
}

#alert-icon {
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 60px;
  border: 1px solid rgb(245, 245, 245, 0.2); /*F5F5F5, 20%*/
}

#alert-icon.success {
  background-color: rgb(0, 122, 255, 0.2); /*007AFF, 20%*/
  border: 1px solid rgb(0, 122, 255, 0.2); /*007AFF, 20%*/
}

#alert-icon.error {
  background-color: rgb(255, 57, 61, 0.2); /*FF393D, 20%*/
  border: 1px solid rgb(255, 57, 61, 0.2); /*FF393D, 20%*/
}

#alert-icon.warning,
#alert-icon.confirmation {
  background-color: rgb(255, 204, 0, 0.2); /*FFCC00, 20%*/
  border: 1px solid rgb(255, 204, 0, 0.2); /*FFCC00, 20%*/
}

#alert-icon.information,
#alert-icon.input {
  background-color: rgb(245, 245, 245, 0.1); /*F5F5F5, 10%*/
  border: 1px solid rgb(245, 245, 245, 0.1); /*F5F5F5, 10%*/
}


/*===== Alert Buttons =====*/
#alert-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  margin-top: auto;
}

#alert-button-primary {
  width: calc(50% - 8px);
  height: 44px;

  padding: 0px 16px;

  background-color: rgb(0, 122, 255, 0.8); /*007AFF, 80%*/

  border-radius: 12px;
  border: none;

  color: #F5F5F5;
  font-size: 16px;

  cursor: pointer;
}

#alert-button-secondary {
  width: calc(50% - 8px);
  height: 44px;

  padding: 0px 16px;

  background-color: rgb(23, 28, 35, 0.6); /*171C23, 60%*/

  border-radius: 12px;
  border: none;

  color: #F5F5F5;
  font-size: 16px;

  cursor: pointer;
  visibility: hidden;
}


/*===== Alert Input =====*/
#alert-input {
  width: calc(100% - 32px);
  height: 44px;

  padding: 0px 16px;

  background-color: transparent;

  border-radius: 12px;
  border: 1px solid rgb(245, 245, 245, 0.2); /*F5F5F5, 20%*/

  color: #F5F5F5;
  font-size: 16px;

  cursor: text;
}`,
    JSTW: `import { useEffect, useState } from "react";
import { 
  IoCheckmark,
  IoClose,
  IoAlert,
  IoHelp,
  IoInformation,
  IoExtensionPuzzle
 } from "react-icons/io5";

export default function ZenEngineAlert({ AlertStructure, setAlertStructure, children }) {
  const [inputValue, setInputValue] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#F5F5F5");
  const [buttonText, setButtonText] = useState({
    primary: "Ok",
    secondary: "Cancel"
  });

  useEffect(() => {
    switch (AlertStructure.type || "information") {
      case "success":
        setPrimaryColor("#007AFF");
        setButtonText({
          primary: "Ok",
          secondary: false
        });
        break;
      case "error":
        setPrimaryColor("#FF393D");
        setButtonText({
          primary: "Ok",
          secondary: "Cancel"
        });
        break;
      case "warning":
        setPrimaryColor("#FFCC00");
        setButtonText({
          primary: "Ok",
          secondary: "Cancel"
        });
        break;
      case "confirmation":
        setPrimaryColor("#FFCC00");
        setButtonText({
          primary: "Yes",
          secondary: "Cancel"
        });
        break;
      case "information":
        setPrimaryColor("#F5F5F5");
        setButtonText({
          primary: "Ok",
          secondary: false
        });
        break;
      case "input":
        setPrimaryColor("#F5F5F5");
        setButtonText({
          primary: "Ok",
          secondary: "Cancel"
        });
        break;
      default:
        setPrimaryColor("#F5F5F5");
    }
  }, [AlertStructure.type])

  function getIconByType(type) {
    switch (type) {
      case "success":
        return <IoCheckmark size={32} color={primaryColor}/>
      case "error":
        return <IoClose size={32} color={primaryColor}/>
      case "warning":
        return <IoAlert size={32} color={primaryColor}/>
      case "confirmation":
        return <IoHelp size={32} color={primaryColor}/>
      case "information":
        return <IoInformation size={32} color={primaryColor}/>
      case "input":
        return <IoExtensionPuzzle size={32} color={primaryColor}/>
      default:
        return <IoExtensionPuzzle size={32} color={primaryColor}/>
    }
  }

  function HandlePrimaryButton() {
    setAlertStructure((prev) => ({
      ...prev,
      isOpened: false,
    }));
    AlertStructure.actionOk();
  }

  function HandleSecondaryButton() {
    setInputValue("")
    setAlertStructure((prev) => ({
      ...prev,
      isOpened: false,
    }));
    AlertStructure.actionCancel();
  }

  return (
    <>
      <div className="w-dvw h-dvh fixed top-0 left-0 z-20 flex justify-center items-center bg-[rgba(0,0,0,0.6)] backdrop-blur-lg opacity-100 pointer-events-all transition-[0.2s]" style={{ opacity: AlertStructure.isOpened ? 1 : 0, pointerEvents: AlertStructure.isOpened ? "all" : "none" }}>
        <div
          className="w-[calc(100vw-64px)] max-w-[400px] h-max min-h-[260px] p-[32px] flex flex-col overflow-hidden gap-[16px] bg-[rgb(15,19,26,0.8)] backdrop-blur-lg border border-[rgb(245,245,245,0.2)] rounded-[32px]"
          style={{ borderColor: 
            AlertStructure.type === "success" ? "rgb(0, 122, 255, 0.2)" : 
            AlertStructure.type === "error" ? "rgb(255, 57, 61, 0.2)" : 
            AlertStructure.type === "warning" || AlertStructure.type === "confirmation" ? "rgb(255, 204, 0, 0.2)" : 
            AlertStructure.type === "information" || AlertStructure.type === "input" ? "rgb(245, 245, 245, 0.2)" : 
            "rgb(245, 245, 245, 0.2)" }}
        >
          <div className="flex justify-center items-center gap-[20px] w-max h-[60px]" >
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full border border-[rgb(245,245,245,0.2)]"
            style={{ backgroundColor: 
              AlertStructure.type === "success" ? "rgb(0, 122, 255, 0.2)" : 
              AlertStructure.type === "error" ? "rgb(255, 57, 61, 0.2)" : 
              AlertStructure.type === "warning" || AlertStructure.type === "confirmation" ? "rgb(255, 204, 0, 0.2)" : 
              AlertStructure.type === "information" || AlertStructure.type === "input" ? "rgb(245, 245, 245, 0.2)" : 
              "rgb(245, 245, 245, 0.2)",
              borderColor: 
                AlertStructure.type === "success" ? "rgb(0, 122, 255, 0.2)" : 
                AlertStructure.type === "error" ? "rgb(255, 57, 61, 0.2)" : 
                AlertStructure.type === "warning" || AlertStructure.type === "confirmation" ? "rgb(255, 204, 0, 0.2)" : 
                AlertStructure.type === "information" || AlertStructure.type === "input" ? "rgb(245, 245, 245, 0.2)" : 
                "rgb(245, 245, 245, 0.2)" }}
            >
              {getIconByType(AlertStructure.type || "information")}
            </div>
            <h2 className="text-[28px] text-[#F5F5F5] font-bold">{AlertStructure.title ? AlertStructure.title : AlertStructure.type.replace(/^./, (char) => char.toUpperCase())}</h2>
          </div>
          {
            AlertStructure.type === "input" ? (
              <input 
                type="text"
                name="alert-input"
                placeholder={AlertStructure.placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full h-[44px] p-[16px] rounded-[12px] border border-[rgb(245,245,245,0.2)] color-[#F5F5F5] text-[16px]"
              />
            ) : (
              children
            )
          }
          <div className="flex justify-center items-center gap-[16px] w-full mt-auto">
            <button
              style={{ visibility: buttonText.secondary ? "visible" : "hidden" }}
              onClick={HandleSecondaryButton}
              className="w-[calc(50%-8px)] h-[44px] rounded-[12px] bg-[rgb(23,28,35,0.6)] color-[#F5F5F5] text-[16px] cursor-pointer"
            >
              {buttonText.secondary}
            </button>

            <button 
              style={{ backgroundColor: AlertStructure.type === "confirmation" ? "rgb(255, 204, 0, 0.8)" : "rgb(0, 122, 255, 0.8)" }}
              onClick={HandlePrimaryButton}
              className="w-[calc(50%-8px)] h-[44px] rounded-[12px] bg-[rgb(0,122,255,0.8)] color-[#F5F5F5] text-[16px] cursor-pointer"
            >
              {buttonText.primary}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
`
  }

  return (
    <>
      <h1 id="demo-title">Alerts</h1>
      <TabSelect
        state={state}
        setState={setState}
      />

      {state === "review" ? (
        <>
          <Review>
            Browser's default alert is kinda boring, isn't it? Introducing ZenEngine Alerts. You read that right, alerts—we got more than one. Successes, Warnings, Errors, Confirmations, Informations, and even Inputs. 
          </Review>
          <Review sizeY={"500"}>
            <ZenEngineAlert
              AlertStructure={alertStructure}
              setAlertStructure={setAlertStructure}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </ZenEngineAlert>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "200px", position: "absolute", top: "50%", right: "50%", transform: "translate(50%, -50%)" }}>
              <button onClick={() => openAlert("success")} className="showalert-button">
                Alert: Success
              </button>

              <button onClick={() => openAlert("error")} className="showalert-button">
                Alert: Error
              </button>

              <button onClick={() => openAlert("warning")} className="showalert-button">
                Alert: Warning
              </button>

              <button onClick={() => openAlert("confirmation")} className="showalert-button">
                Alert: Confirmation
              </button>

              <button onClick={() => openAlert("information")} className="showalert-button">
                Alert: Information
              </button>

              <button onClick={() => openAlert("input")} className="showalert-button">
                Alert: Input
              </button>
            </div>
          </Review>
        </>
      ) : (
        <>
          <h1 id="demoCode-title">Dependencies</h1>
          <Code codeLang="bash">
            {codes.Dependencies}
          </Code>
          <h1 id="demoCode-title">Call</h1>
          <Code>
            {codes.Call}
          </Code>
          <div id="demoCode-header">
            <h1 id="demoCode-title">JavaScript</h1>
            <select id="demoCode-select" onChange={(e) => setCodeType(e.target.value)}>
              <option value="css">CSS</option>
              <option value="tailwind">Tailwind</option>
            </select>
          </div>
          <Code>
            {codeType === "css" ? codes.JS : codes.JSTW}
          </Code>
          {codeType === "css" ?
            <>
              <h1 id="demoCode-title">CSS</h1>
              <Code codeLang="css">
                {codes.CSS}
              </Code>
            </>
            : null
          }
          <h1 id="demoCode-title">How It Works?</h1>
          <Review>
            If we take a look in "Call" section, we can see that we are passing a prop called "AlertStructure" to the "ZenEngineAlert" component. This prop is an object that contains the following properties:
            <ul style={{ marginTop: "12px", marginLeft: "20px" }}>
              <li>isOpened: [Boolean] Show or hide the alert screen.</li>
              <li>type: [String] The type of alert to display. (success, error, warning, confirmation, information, input)</li>
              <li>title: [String] The title of the alert. By default, it will display the type of the alert.</li>
              <li>placeholder: [String] The placeholder of the input field.</li>
              <li>response: [Object] The response of the alert. It contains the following properties:</li>
              <ul style={{ marginTop: "12px", marginLeft: "20px" }}>
                <li>ok: [Boolean] Whether the user clicked the primary button or not.</li>
                <li>object: [String] The value of the input field if the type is input.</li>
              </ul>
            </ul>
          </Review>
        </>
      )}
    </>
  )
}