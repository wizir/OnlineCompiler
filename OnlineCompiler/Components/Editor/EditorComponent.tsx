import * as React from "react";


type EditorProps = {
};

const EditorComponent = (props: EditorProps) => {
    
    
    const keyDownHandler = (e: KeyboardEvent): void => {
        if(e.key == 'Tab'){
            const target = e.currentTarget as HTMLTextAreaElement;
            const index = target.selectionStart;
            const lines = target.value
                .substr(0, target.selectionStart)
                .split(/\r?\n|\r/);
            
            // TODO might want to save these line and column number and show them somewhere, also tabulation count might should be editable
            const lineNo = lines.length;
            const colNo =  lines[lines.length -1].length;
            const count = 4 - colNo % 4;
            target.value = target.value.slice(0, index) + ' '.repeat(count) + target.value.slice(index);
            target.selectionStart = target.selectionEnd = index + count;
            e.preventDefault();
        }
    };
    
    return (
      <div className="tile">
          <div className="Editor_Content">
              <h3>Editor</h3>9
              <div className="Editor_TextareaContainer">
                  <textarea className="Editor_Textarea" onKeyDown={keyDownHandler.bind(this)} onBlur={() => {}}/>
              </div>
          </div>
      </div>
    )
};

export default  EditorComponent;
