import * as React from "react";


type EditorProps = {
    defaultProgram: string
};

const EditorComponent = (props: EditorProps) => {
    
    return (
      <div className="Editor">
          <h3>Editor</h3>
          <textarea className="Editor_Textbox" value={props.defaultProgram}/>
      </div>
    )
};

export default  EditorComponent;
