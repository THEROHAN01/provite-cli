#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const cssFiles = [
    path.join(process.cwd(),'src','App.css'),
    path.join(process.cwd(),'src','index.css'),
];

cssFiles.forEach(file => {
    fs.writeFileSync(file,'', 'utf8');
});

const appjsx = path.join(process.cwd(),'src','App.jsx');

const content = 
`
import React from 'react';

function App(){
    return(
        <>
        <h1>Code like its your last commit!</h1>
        </>
    );

}
export default App;
`;

fs.writeFileSync(appjsx,content.trim(),'utf8');
console.log(`ready to code!`);