import React from 'react';
import ReactDom from 'react-dom';
import HelloReact from './hello_react';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<HelloReact />, root);
