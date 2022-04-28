import { Link } from "react-router-dom";
import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <section>
        <div className=" w-full  text-white py-20">
          <div className="container  flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                Another Travel
              </h1>
              <h2 className="text-3xl md:text-5xl text-gray-600 leading-relaxed md:leading-snug mb-2">
                Turistik kompaniya
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Bizning kompaniya ichki va tashqituristlarni kutib olish va
                kuzatib qoyish blan shug'ullanadi
              </p>
              <Link
                to={"/"}
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Bosh sahifa
              </Link>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    className=" rounded-3xl mt-5 w-full md:mt-0  md:p-0"
                    src="https://old.travel123.ru/wp-content/uploads/Uzbekistan/Uzbekistan-mini-1600.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
