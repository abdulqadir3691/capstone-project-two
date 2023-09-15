import React from "react";
import Image from "next/image";
import Apple from "../../../assets/green-apple.svg";
import "./prod.css";
import Bag from "../../../assets/Bag.svg";
import cabbage from "../../../assets/cathrine cabage.svg";
import Latuce from "../../../assets/green-letce.svg";
import Chili from "../../../assets/green-chili.svg";
import Corn from "../../../assets/corn.svg";
import Ratings from "../../../assets/Rating (1)r.svg";
import Line from "../../../assets/LineFull.svg";
const Products = () => {
  const data = [
    {
      imgUrl: Apple,
      heading: "Green Apple",
      price: "14.99",
      rating: Ratings,
      bagImg: Bag,
    },
    {
      imgUrl: cabbage,
      heading: "Cathrine Cabage",
      price: "14.99",
      rating: Ratings,
      bagImg: Bag,
    },
    {
      imgUrl: Latuce,
      heading: "Green Lettuce",
      price: "14.99",
      rating: Ratings,
      bagImg: Bag,
    },
    {
      imgUrl: Chili,
      heading: "Green Chili",
      price: "14.99",
      rating: Ratings,
      bagImg: Bag,
    },
    {
      imgUrl: Corn,
      heading: "Corn",
      price: "14.99",
      rating: Ratings,
      bagImg: Bag,
    },
  ];

  return (
    <div>
      <div className="">
        <h3 className="text-center">Featured Products</h3>
        <div className="align-items-center text-center">
          <Image src={Line} alt="line" />
        </div>
        <div className="row  pt-5 me-2 feature-card mobile-res-feature-top-card">
          {data.map((item) => {
            return (
              <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                <div className="card custom-card">
                  <Image
                    className="p-2"
                    src={item.imgUrl}
                    alt="apple"
                    layout="responsive"
                  />
                  <div className="card-body">
                    <h6>{item.heading}</h6>
                    <div className="d-flex justify-content-between card-typography">
                      <div className="gap-3">
                        <span className="fw-bold">${item.price}</span>
                        <Image
                          src={item.rating}
                          alt=""
                          layout="responsive"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="">
                        <Image
                          src={item.bagImg}
                          alt="bag"
                          layout="responsive"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
