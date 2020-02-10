import * as React from "react";


type EditorProps = {
};

const EditorComponent = (props: EditorProps) => {
    
    return (
      <div className="tile">
          <div className="Editor_Content">
              <h3>Editor</h3>
              <textarea className="Editor_Textbox"/>
          </div>
      </div>
    )
};

export default  EditorComponent;
