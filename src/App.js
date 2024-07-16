import logo from './logo.svg';
import './App.css';
import Cards from './cardinsert/cards';
import Table from './table/tables';
import { imgData } from './imagecustom/imagelist';
import CustomImage from './imagecustom/image';
import Header from './imagecustom/header';
import Footer from './imagecustom/footer';
// import { ProgressBar } from 'react-bootstrap';

import CustomList from './list/customlist';
import ConditionalRendering from './conditional-rendering/conditions';
import ArrayCheck from './conditional-rendering/conditions';




// // const emptyArray = [];
// const filledArray = [1, 2, 3, 4, 5, 6, 7];

// const App=()=>{
//   return(
//     <>
//     {/* <Header></Header><br/>

//     <CustomImage properties={imgData}>

//     </CustomImage>
    
//     <Footer></Footer> */}
//     {/* <CustomList  list={["apple","banaana","grapes","mango","watermelon"]}/>
//     <CustomList  list={["brinjal","carrot","tomato","potato","radish"]}/> */}



//     {/* <ConditionalRendering/> */}

//      {/* <ArrayCheck  items={emptyArray} /> */}
//      <ArrayCheck  items={filledArray} />

//     </>
//   )
 
 
// }

// export default App;
const emptyArray = [];
const filledArray = [1, 2, 3, 4, 5, 6, 7];

const App=()=>{


    return (
      <div>
        <h1>Empty Array Check</h1>
        <ArrayCheck items={emptyArray} />

        <h1>Filled Array Check</h1>
        <ArrayCheck items={filledArray} />
      </div>
    );
  
}

export default App;


