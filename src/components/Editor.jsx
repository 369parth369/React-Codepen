// import { useState } from 'react'
// import React from "react";
// import { Box } from "@mui/material";
// import styled from '@emotion/styled';


// //icons
// import SettingsIcon from '@mui/icons-material/Settings';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

// // library for code
// import { Controlled as ControlledEditor } from 'react-codemirror2'

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';

// import '../App.css'

// // components
// import DropDownHtml from './DropDownHtml';

// const Head = styled(Box)`
// flex: 1;
// display: flex;
// flex-direction: column;
// padding: 0 0 0 12px;
// `

// const Heading = styled(Box)`
// background: #1d1e22;
// display: flex;
// padding: 9px 9px;
// `

// const Header = styled(Box)`
// display: flex;
// background: #060606;
// color: #AAAEBC;
// justify-content: space-between;
// font-weight: 700;
// ` 

// const Editor = ({ heading, icon, color, value, onChange, }) => {

// const [open, setOpen] = useState(true);
// const [openHtml, setOpenHtml] = useState(false);

// const handleChange = (editor, data, value) => {
//     onChange(value);
//   }

//   return (
//     <>
//       <Head style={open ? null : {flexGrow: 0}}> 
//         <Header>
//           <Heading style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box component="span" style={{
//             background: color,
//             height: 20,
//             width: 20,
//             display: 'flex',
//             placeContent: 'center',
//             borderRadius: 6,
//             marginRight: 6,
//             paddingBottom: 2,
//             color: "black"
//           }}>{icon}</Box>
//          {heading}
//         </Heading>
        
//         {/* <SettingsIcon />
//         <KeyboardArrowDownIcon />
//         <CloseFullscreenIcon />  */}
//         {/* // we are using as a component.. so that why we are using a icon as a selfclosing comp.. */}

//         <div style={{ display: 'flex', alignItems: 'center' }}>
//         <div style={{ marginRight: 10 }}>
//           <SettingsIcon 
//             fontSize='small'
//             cursor='pointer'
//           />
//         </div>
//         <div style={{ marginRight: 10 }}>
//           <KeyboardArrowDownIcon
//             fontSize='small'
//             cursor='pointer'
//             onClick={() => setOpenHtml(prevState => !prevState)}
//           />
//         </div>
//         <CloseFullscreenIcon
//           fontSize='small'
//           cursor='pointer'
//           onClick={() => setOpen(prevState => !prevState)} // for true false 
//         /> 
//       </div>    
//         </Header>
//         <ControlledEditor className='controlled-editor'  
//         value={value}
//         onBeforeChange={handleChange}
//         options={{
//           mode: 'xml',
//           theme: 'material',
//           lineNumbers: true
//         }}
        
//         />
//       </Head>
//     </>
//   );
// };

// export default Editor;


import { useState } from 'react';
import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

// Library for code
import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

// Components
// const DropDownHtml = () => {
//   // Implementation of DropDownHtml component goes here
//   // ...
//   // Return the JSX for the dropdown component
//   return <div>DropDownHtml component</div>;
// };

const Head = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 12px;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 9px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);
  // const [openHtml, setOpenHtml] = useState(false);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  // const handleToggleHtmlDropdown = () => {
  //   setOpenHtml(prevState => !prevState);
  // };

  return (
    <>
      <Head style={open ? null : { flexGrow: 0 }}>
        <Header>
          <Heading style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box
              component="span"
              style={{
                background: color,
                height: 20,
                width: 20,
                display: 'flex',
                placeContent: 'center',
                borderRadius: 6,
                marginRight: 6,
                paddingBottom: 2,
                color: 'black',
              }}
            >
              {icon}
            </Box>
            {heading}
          </Heading>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: 10 }}>
              <SettingsIcon fontSize="small" cursor="pointer" />
            </div>
            <div style={{ marginRight: 10 }}>
              <KeyboardArrowDownIcon fontSize="small" cursor="pointer" 
              // onClick={handleToggleHtmlDropdown} 
              />
            </div>
            <CloseFullscreenIcon fontSize="small" cursor="pointer" onClick={() => setOpen(prevState => !prevState)} />
          </div>
        </Header>
        <ControlledEditor
          className="controlled-editor"
          value={value}
          onBeforeChange={handleChange}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true,
          }}
        />
      </Head>
      {/* {openHtml && <DropDownHtml />} */}
    </>
  );
};

export default Editor;
