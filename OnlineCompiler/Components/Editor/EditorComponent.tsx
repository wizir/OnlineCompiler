import * as React from "react";


type EditorProps = {
    defaultProgram: string
};

const EditorComponent = (props: EditorProps) => {
    
    return (
      <div className="Editor">
          <div className="Editor_Content">
              <h3>Editor</h3>
              <textarea className="Editor_Textbox" value={props.defaultProgram}/>
          </div>
      </div>
    )
};

export default  EditorComponent;
