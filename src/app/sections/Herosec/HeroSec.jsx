import React from "react";
import Image from "next/image";
import Hero from "../../../assets/hero-image.svg";
import Arrow from "../../../assets/arrow.svg";
import "./HeroSec.css";
import Car from "../../../assets/delivery-truck 1.svg";
import CustomerSupport from "../../../assets/headphones 1.svg";
import Bag from "../../../assets/shopping-bag.svg";
import Package from "../../../assets/package.svg";
import lineimg from "../../../assets/Line.png";

const HeroSec = () => {
  return (
    <div>
      <div class="card-back bg-color border-0">
        <div class="container  my-4 pb-5  ">
          <div class="row d-flex align-items-center mob-res">
            <div class="col-md-6">
              <h6 className="h6-style">WELCOME TO SHOPERY</h6>
              <h1>
                Fresh & Healthy <br /> Organic Food
              </h1>
              <h4>
                Sale up <span className="off">30% OFF</span>{" "}
              </h4>
              <p className="para">
                Free shipping on all your order. we deliver, you enjoy
              </p>
              <button className="hero-btn text-white py-2 px-3">
                Shop Now <Image className="ms-2" src={Arrow} alt="" />
              </button>
            </div>
            <div class="col-md-6">
              <Image
                className=""
                src={Hero}
                alt="hero-image"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="container ">
        <div class="row card-bg mx-5 d-flex rounded shadow-lg mb-5 bg-body rounded position-relative align-items-center">
          <div class="row g-4  row-cols-1 row-cols-lg-4 pb-2">
            <div class="second-cards col mb-1">
              <div className="d-flex px-1">
                <Image className="pb-2" src={Car} width={60} height={70} />

                <div className="px-2 pt-1">
                  <p className="font-size-5 fw-bold">Free Shipping</p>
                  <p className="font-size-5 text-secondary ">
                    Free shipping on all your order
                  </p>
                </div>
              </div>
            </div>
            <div class="second-cards col">
              <div className="d-flex px-1">
                <Image src={CustomerSupport} width={60} height={70} />

                <div className="px-2 pt-3">
                  <p className="font-size-5 fw-bold"> Free Delivery </p>
                  <p className="font-size-5 text-secondary ">
                    {" "}
                    100% Free for all orders{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="second-cards col">
              <div className="d-flex px-1 ">
                <Image src={Bag} width={50} height={60} />

                <div className="px-2 pt-3">
                  <p className="font-size-5 fw-bold"> Great Support 24/7 </p>
                  <p className="font-size-5 text-secondary ">
                    {" "}
                    We care your experiences{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="second-cards col">
              <div className="d-flex  px-1">
                <Image className="" src={Package} width={50} height={60} />

                <div className="pt-3 px-2">
                  <p className="font-size-5 fw-bold"> secure Payment </p>
                  <p className="font-size-5 text-secondary ">
                    {" "}
                    100% Secure Payment Method{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;

// import React from "react";
// import Image from "next/image";
// import Hero from "../../../assets/hero-image.svg";
// import Arrow from "../../../assets/arrow.svg";
// import "./HeroSec.css";
// import Car from "../../../assets/delivery-truck 1.svg";
// import CustomerSupport from "../../../assets/headphones 1.svg";
// import Bag from "../../../assets/shopping-bag.svg";
// import Package from "../../../assets/package.svg";
// import lineimg from "../../../assets/Line.png";

// const HeroSec = () => {
//   return (
//     <div>
//       <div class="card-back bg-color border-0">
//         <div class="container  my-4 pb-5  ">
//           <div class="row d-flex align-items-center py-3">
//             <div class="col-md-6">
//               <h6 className="h6-style">WELCOME TO SHOPERY</h6>
//               <h1>
//                 Fresh & Healthy <br /> Organic Food
//               </h1>
//               <h4>
//                 Sale up <span className="off">30% OFF</span>{" "}
//               </h4>
//               <p className="para">
//                 Free shipping on all your order. we deliver, you enjoy
//               </p>
//               <button className="hero-btn text-white py-2 px-3">
//                 Shop Now <Image className="ms-2" src={Arrow} alt="" />
//               </button>
//             </div>
//             <div class="col-md-6">
//               <Image
//                 className=""
//                 src={Hero}
//                 alt="hero-image"
//                 layout="responsive"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="container ">
//         <div class="row card-bg mx-5 d-flex rounded shadow-lg mb-5 bg-body rounded position-relative align-items-center">
//           <div class="row g-4  row-cols-1 row-cols-lg-4 pb-2">
//             <div class="second-cards col mb-1">
//               <div className="d-flex px-1">
//                 <Image className="pb-2" src={Car} width={60} height={70} />

//                 <div className="px-2 pt-1">
//                   <p className="font-size-5 fw-bold">Free Shipping</p>
//                   <p className="font-size-5 text-secondary ">
//                     Free shipping on all your order
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="second-cards col">
//               <div className="d-flex px-1">
//                 <Image src={CustomerSupport} width={60} height={70} />

//                 <div className="px-2 pt-3">
//                   <p className="font-size-5 fw-bold"> Free Delivery </p>
//                   <p className="font-size-5 text-secondary ">
//                     {" "}
//                     100% Free for all orders{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="second-cards col">
//               <div className="d-flex px-1 ">
//                 <Image src={Bag} width={50} height={60} />

//                 <div className="px-2 pt-3">
//                   <p className="font-size-5 fw-bold"> Great Support 24/7 </p>
//                   <p className="font-size-5 text-secondary ">
//                     {" "}
//                     We care your experiences{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="second-cards col">
//               <div className="d-flex  px-1">
//                 <Image className="" src={Package} width={50} height={60} />

//                 <div className="pt-3 px-2">
//                   <p className="font-size-5 fw-bold"> secure Payment </p>
//                   <p className="font-size-5 text-secondary ">
//                     {" "}
//                     100% Secure Payment Method{" "}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSec;
