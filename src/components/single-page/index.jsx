import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import http from "../../api/config";
import { FaEdit } from "react-icons/fa";
const Index = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});


  const getProductDetail=async()=>{
   const response=await http.get(`/product/${id}`)
   console.log(response?.data)
   if (response?.status===200) {
    setProductData(response?.data)
   }
  }
  useEffect(() => {
    getProductDetail()
  }, [id]);

  const openModal = (item) => {
    setUpdateData(item);
    setOpen(true);
  };

  return (
    
    
    
    <div>
      <div className="font-sans bg-white">
        <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <img
                  src={productData?.image_url}
                  alt="Product"
                  className="w-3/4 rounded object-cover mx-auto"
                />
                <button type="button" className="absolute top-4 right-4"
                onClick={openModal}
                >
                <FaEdit className="text-[red] text-lg " />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop2.webp"
                    alt="Product2"
                    className="w-full"
                  />
                </div>
                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop3.webp"
                    alt="Product2"
                    className="w-full"
                  />
                </div>
                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop4.webp"
                    alt="Product2"
                    className="w-full"
                  />
                </div>
                <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/laptop5.webp"
                    alt="Product2"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-gray-800">
                {
                  productData?.product_name
                }
              </h2>

              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-gray-800 text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <p className="text-gray-800 text-3xl font-bold">$1200</p>
                <p className="text-gray-400 text-base">
                  <strike>$1500</strike>{" "}
                  <span className="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    type="button"
                    className='w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all'
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                  ></button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Product information
            </h3>
            <ul className="mt-4 space-y-6 text-gray-800">
              <li className="text-sm">
                SIZE <span className="ml-4 float-right">{productData?.size} </span>
              </li>
              <li className="text-sm">
                MADE IN <span className="ml-4 float-right">{productData?.made_in} </span>
              </li>
              <li className="text-sm">
                GENDER <span className="ml-4 float-right">{productData?.for_gender}</span>
              </li>
              <li className="text-sm">
                DISCOUNT
                <span className="ml-4 float-right">{productData?.discount}</span>
              </li>
              <li className="text-sm">
                COUNT
                <span className="ml-4 float-right">{productData?.count}</span>
              </li>
              <li className="text-sm">
               COLOR <span className="ml-4 float-right">{productData?.color}</span>
              </li>
              <li className="text-sm">
                AGE MAX
                <span className="ml-4 float-right">{productData?.age_max}</span>
              </li>
              <li className="text-sm">
               AGE MIN
                <span className="ml-4 float-right">
                {productData?.age_min}
                </span>
              </li>
              <li className="text-sm">
               COST
                <span className="ml-4 float-right">{productData?.cost}</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
            <div className="grid md:grid-cols-2 gap-12 mt-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">5.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded bg-blue-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">4.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded bg-blue-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">3.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded bg-blue-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">2.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded bg-blue-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">1.0</p>
                  <svg
                    className="w-5 fill-blue-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-400 rounded w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded bg-blue-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-gray-800">
                      John Doe
                    </h4>
                    <div className="flex space-x-1 mt-1">
                      <svg
                        className="w-4 fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-blue-600"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p className="text-xs !ml-2 font-semibold text-gray-800">
                        2 mins ago
                      </p>
                    </div>
                    <p className="text-sm mt-4 text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                      eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  );
};

export default Index;
