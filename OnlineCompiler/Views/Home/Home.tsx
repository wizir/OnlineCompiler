import * as ReactDOM from 'react-dom';
import * as React from 'react';

import IDEComponent from "../../Components/IDE/IDEComponent";
import {CompilerApi} from "../../Components/CompilerApi";

const ide = document.getElementById('IDE');
ReactDOM.render(<IDEComponent api={new CompilerApi()}/>, ide);
