import React from 'react';
import galleryDB from '../json/gallerydb.json';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Gallerycontent = (props) => {
  const itemimg = galleryDB[props.galleryId].img;
  const itemcls = galleryDB[props.galleryId].cls.join(" ");


  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <div id={props.galleryId} className='py-5'>
      <div className="container ">
        <div className='row' data-aos="zoom-in" data-aos-duration="2000">
          <ImageList className={itemcls} 
            sx={{ width: 1600, height: 620 }}
            variant="quilted"
            cols={12}
            rowHeight={100}
          >
            {itemimg.map((item,index) => (
              <ImageListItem key={'what' + index} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                  {...srcset(item.img)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>



          {/* <li className={itemcls}>
            {
              itemimg.map((v, i) => {
                return (
                  i < 5 &&
                    <div className={"sub" + i + " col-4"}>
                      <img src={v} className="img-fluid" />
                      
                    </div>
                )
              })
            }
          </li>
          <li className={"col-3"}><img src={itemimg[itemimg.length - 1]} className="img-fluid" />
          </li> */}
        </div>
      </div>


    </div>

  );
};

export default Gallerycontent;