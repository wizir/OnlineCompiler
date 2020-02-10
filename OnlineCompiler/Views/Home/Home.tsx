import * as ReactDOM from 'react-dom';
import * as React from 'react';

import IDEComponent from "../../Components/IDE/IDEComponent";
import {ProjectApi} from "../../Components/ProjectApi";

const node = document.getElementById('IDE');
ReactDOM.render(<IDEComponent api={new ProjectApi()}/>, node);
