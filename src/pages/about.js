import { Link } from "react-router-dom";
import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <section>
        <div className=" w-full  text-white md:pt-10 pt-5">
          <div className="container  flex flex-col md:flex-row md:items-start my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 className="text-3xl md:text-5xl  text-yellow-300 tracking-loose">
                Another Travel
              </h1>
              <h2 className="text-3xl md:text-5xl md:my-16 text-gray-600 leading-relaxed md:leading-snug mb-2">
                Turistik kompaniya
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-10">
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
              <div className="h-full flex flex-wrap content-center">
                <div>
                  <img
                    className=" rounded-3xl mt-5 w-full md:mt-0  md:p-0"
                    src="https://old.travel123.ru/wp-content/uploads/Uzbekistan/Uzbekistan-mini-1600.jpg"
                  />
                </div>
              </div>
              <p className="text-md md:text-xl mt-5  text-gray-700 ">
                Toshkent – O’zbekistonning poytaxti va Markaziy Osiyodagi eng
                katta shaharlardan biri. Olis o’tmishdagidek hozirgi paytda ham
                Toshkent o’zimizning O’zbekiston Havo Yo’llari va xalqaro
                aviakompaniyalar yordamida xalqaro transport yo’nalishlarining
                chorrahasidir. Toshkent dunyoning eng qadimiy shaharlaridan
                biridir. 2009-yilda u o’zining 2200 yilligini nishonladi. Bir
                paytning o’zida Toshkent zamonaviy ishlab chiqarish markazidir,
                bu yerda 500 dan ortiq kompaniyalar turli xil mahsulotlar;
                samolyotdan traktorgacha, televizordan to`qimachilik va oyoq
                kiyimlargacha ishlab chiqaradi. Toshkent tez sur`atlarda tarixiy
                yodgorliklar va zamonaviy osmono’par binolarning o’zaro
                uyg’unligida zamonaviy rivojlangan xalqaro megapolisga
                aylanmoqda. Bugungi kunda O’zbekistonda yuzga yaqin muzeylar
                ishlab turibdi va ularning yarmi mamlakatning poytaxtida
                joylashgan. Ularning har biri o’zbek xalqining boy madaniy
                merosini aks ettiradi. Poytaxt markazida Temuriylar tarixi
                Davlat Muzeyi joylashgan bo’lib, uning ulkan ko’k gumbazi
                Samarqandning qadimiy gumbazini eslatadi. Uning eksponatlari
                O’zbekiston hududida o’rta asrlardagi davlatchilik shakllarini
                shakllanishidan guvohlik beradi va Amir Temur davridagi fan,
                madaniyat va san’atning rivojlanishini aks ettiradi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
