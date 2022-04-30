import { Link } from "react-router-dom";
import Layout from "../components/layout";

function National() {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative overflow-hidden">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      Uzbekistan
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Hazrati Imom
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Me'moriy yodgorlik
                      </p>
                      <Link
                        to={`/national/1`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="http://www.business-tour.ru/upload/images/tours/best_price/Uzbekistan/1.jpg"
                    className="w-full  ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500 "
                    alt="chair"
                  />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative overflow-hidden">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      Uzbekistan
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Xiva
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Me'moriy qal'a
                      </p>
                      <Link
                        to={`/national/2`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://countrysideindia.com/wp-content/uploads/2019/10/Itchan-Kala-Khiva-Uzbekistan._526336663.jpg"
                    className="w-full  ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500"
                    alt="wall design"
                  />
                </div>
              </div>
              <div className="relative  md:mt-7 mt-4 overflow-hidden">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    Uzbekistan
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Shohizinda
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Tarixiy naqqoshlik
                    </p>
                    <Link
                      to={`/national/3`}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://media.istockphoto.com/photos/shahizinda-mausoleum-samarkand-uzbekistan-shohizinda-necropolis-picture-id1194231490?b=1&k=20&m=1194231490&s=170667a&w=0&h=LXAA9aaQj8MDj_yFRsnxhRlkQcas9Qquxb39IQELM0I="
                  alt="sitting place"
                  className="w-full object-cover ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500 sm:block hidden"
                />
                <img
                  className="w-full object-cover ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500 sm:hidden"
                  src="https://media.istockphoto.com/photos/shahizinda-mausoleum-samarkand-uzbekistan-shohizinda-necropolis-picture-id1194231490?b=1&k=20&m=1194231490&s=170667a&w=0&h=LXAA9aaQj8MDj_yFRsnxhRlkQcas9Qquxb39IQELM0I="
                  alt="sitting place"
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative overflow-hidden">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    Uzbekistan
                  </p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Bukhara
                    </h2>
                    <p className="text-base leading-4 text-white mt-2">
                      Me'moriy masjid
                    </p>
                    <Link
                      to={`/national/4`}
                      className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://media.istockphoto.com/photos/kalyan-mosque-at-dusk-in-bukhara-uzbekistan-picture-id956576840?k=20&m=956576840&s=612x612&w=0&h=p0uVcIp6yVhaXy3t_cGZbDPbZuQ6iug5AsjezoKWDGU="
                  alt="sitting place"
                  className="w-full object-cover ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500 sm:block hidden"
                />
                <img
                  className="w-full object-cover ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500 sm:hidden"
                  src="https://media.istockphoto.com/photos/kalyan-mosque-at-dusk-in-bukhara-uzbekistan-picture-id956576840?k=20&m=956576840&s=612x612&w=0&h=p0uVcIp6yVhaXy3t_cGZbDPbZuQ6iug5AsjezoKWDGU="
                  alt="sitting place"
                />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative overflow-hidden w-full">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      Uzbekistan
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Samarkand
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Registon madrasasi
                      </p>
                      <Link
                        to={`/national/5`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://avatars.mds.yandex.net/i?id=9d1f164f7758f4e6cb786b15985022be-4866546-images-thumbs&n=13"
                    className="w-full  ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500"
                    alt="chair"
                  />
                </div>
                <div className="relative overflow-hidden w-full sm:mt-0 mt-4">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      Uzbekistan
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Tashkent
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        Minor masjid
                      </p>
                      <Link
                        to={`/national/6`}
                        className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://sogda-tour.com/wp-content/uploads/2020/02/tashkent3.jpg"
                    className="w-full  ease-in-out hover:transform hover:-translate-y-1 hover:scale-110 transition duration-500"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default National;


