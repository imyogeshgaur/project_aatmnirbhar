/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Card from './Card';
import Pdata from './product_data';
const Product = () => {
  return (
    <>
    <div className="my-5">
    <h1 className="text-center mb-5"> Our Products</h1>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                         Pdata.map((val,ind)=>{
                              return <Card
                              key={ind}
                              id={val.id}
                              imgsrc = {val.imgsrc}
                              title={val.title}
                              text={val.text}
                              btnColor={val.btnColor}
                              />
                          })
                    }
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default Product;
