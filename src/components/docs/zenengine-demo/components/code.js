import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import copyIcon from '../../../../resources/copy.svg'
import copyOk from '../../../../resources/copy-ok.svg'

export default function Code({ children, codeLang = "javascript" }) {
  const customTheme = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: "transparent",
      padding: "0px",
      fontSize: "14px",
      textShadow: "none",
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: "transparent",
    }
  };

  const [isCopied, setIsCopied] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCopy() {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  const getCollapsedCode = (code, maxLines = 12) => {
    const lines = code.split("\n");
    if (lines.length <= maxLines) return code;
    return lines.slice(0, maxLines).join("\n");
  };

  return codeLang != "bash" ? (
    <>
      <div id="code-mainbody" className={isCollapsed ? "collapsed" : ""}>
        <button id="code-copybutton" onClick={handleCopy} className={isCopied ? "copied" : ""}>
          <img src={!isCopied ? copyIcon : copyOk} alt="" />
        </button>
        <button id="code-resizebutton" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
        <div id="code-shadow" className={isCollapsed ? "show" : ""}/>
        <SyntaxHighlighter
          language={codeLang}
          style={customTheme}
          showLineNumbers={true}
          className="code-highlighted"
        >
          {isCollapsed ? getCollapsedCode(children) : children}
        </SyntaxHighlighter>
      </div>
    </>
  ) : (
    <>
      <div id="code-mainbody" className="bash">
        <button id="code-copybutton" onClick={handleCopy} className={isCopied ? "copied" : ""}>
          <img src={!isCopied ? copyIcon : copyOk} alt="" />
        </button>
        <SyntaxHighlighter
          language={codeLang}
          style={customTheme}
          showLineNumbers={false}
          className="code-highlighted"
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  )
}
