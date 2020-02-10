import * as React from "react";


type EditorProps = {
};

const EditorComponent = (props: EditorProps) => {
    
    return (
      <div className="tile">
          <div className="Editor_Content">
              <h3>Editor</h3>
              <div className="Editor_TextareaContainer">
                  <textarea className="Editor_Textarea"/>
              </div>
          </div>
      </div>
    )
};

export default  EditorComponent;
