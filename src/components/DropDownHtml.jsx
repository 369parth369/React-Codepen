// import React from 'react';

// const DropDownHtml = () => {
//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle" type="button" id="htmlDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//         HTML Actions
//       </button>
//       <ul className="dropdown-menu" aria-labelledby="htmlDropdown">
//         <li><a className="dropdown-item" href="#">Format HTML</a></li>
//         <li><a className="dropdown-item" href="#">Analyze HTML</a></li>
//         <li><a className="dropdown-item" href="#">Maximize HTML Editor</a></li>
//         <li><a className="dropdown-item" href="#">Fold All</a></li>
//         <li><a className="dropdown-item" href="#">Unfold All</a></li>
//       </ul>
//     </div>
//   );
// };

// export default DropDownHtml;


// import React from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import { ReportGmailerrorredSharp } from '@mui/icons-material';

// const DropDownHtml = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//   return (
//     <div>
//       <div onClick={handleClick}>Open Dropdown</div>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Format HTML</MenuItem>
//         <MenuItem onClick={handleClose}>Analyze HTML</MenuItem>
//         <MenuItem onClick={handleClose}>Maximize HTML Editor</MenuItem>
//         <MenuItem onClick={handleClose}>Fold All</MenuItem>
//         <MenuItem onClick={handleClose}>Unfold All</MenuItem>
//       </Menu>
//     </div>
//   );
// };

// export default DropDownHtml;

