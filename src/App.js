import logo from "./logo.svg";
import "./App.css";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";

import Description from "./components/Description";
function App() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  return (
    <div className="App">
      <Description />
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </div>
  );
}

export default App;
