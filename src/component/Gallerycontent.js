import React from 'react';
import galleryDB from '../json/gallerydb.json';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 1200, height: 450 }}
      variant="quilted"
      cols={12}
      rowHeight={100}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 1,
    cols: 3,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  }
];
// const Gallerycontent = (props) => {
//   const itemimg = galleryDB[props.galleryId].bg;
//   const itemcls = galleryDB[props.galleryId].cls.join(" ");
//   return (
//     <div id={props.galleryId} className='py-5'>
//       <div className="container">
//         <div className='row'>
//           <li className={itemcls}>
//             {
//               itemimg.map((v, i) => {
//                 return (
//                   i < 5 &&
//                     <div className={"sub" + i + " col-4"}>
//                       <img src={v} className="img-fluid" />
                      
//                     </div>
//                 )
//               })
//             }
//           </li>
//           <li className={"col-3"}><img src={itemimg[itemimg.length - 1]} className="img-fluid" />
//           </li>
//         </div>
//       </div>


//     </div>

//   );
// };

// export default Gallerycontent;