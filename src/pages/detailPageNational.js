import { Link, useParams } from "react-router-dom";

const cardList = [
  {
    id: 0,
    title: "",
    chiptaIchida: [],
    city: "",
    tourHaqida: "",
    money: "",
    day: "",
    series: "",
    about: "",
  },
  {
    id: 1,
    title: "Tashkent",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kutib olish va mehmonhonaga joylashtirish",
      "Kumiga 3 mahal milliy taom",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Tashkent",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "$700-1200",
    day: "7-15 kun",
    series:
      "Bizning O'zbekiston miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Shahar sayohati O‘zbekiston” mehmonxonasi ro‘parasidagi Amir Temur maydonidan boshlanadi.Siz chiptalarni to'g'ridan-to'g'ri avtobusda tanlangan vaqtdan 15 daqiqadan so'ng sotib olishingiz mumkin.Bu birinchi kelgan birinchi xizmat, biz band qilmaymiz.Avtobus qat'iy ravishda jadvalga muvofiq kamida 6 kishidan iborat bo'ladi! Kamchilik bo'lsa, keyingi reysga",
  },
  {
    id: 2,
    title: " Xiva",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kutib olish va mehmonhonaga joylashtirish",
      "Kumiga 3 mahal milliy taom",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Xorazim",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "$700-1200",
    day: "7-15 kun",
    series:
      "Bizning O'zbekiston miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Xivaga sayohat - bu ko'p asrlar davomida mukammal saqlanib qolgan va deyarli o'zgarmagan qadimiy ertak shahriga sayohat. YUNESKO ro‘yxatiga kiritilgan tarixiy ichki shahar Ichan-qal’a qal’asining qudratli devorlari orasidan o‘zingizni ko‘rganingizdan so‘ng, har kvadrat metrdagi attraksionlar soni ko‘payib ketadigan noyob maskan – ko‘hna Xivaning havosiga sho‘ng‘iysiz. Jahon me",
  },
  {
    id: 3,
    title: "Shohizinda",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kutib olish va mehmonhonaga joylashtirish",
      "Kumiga 3 mahal milliy taom",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Samarqand",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "$700-1200",
    day: "7-15 kun",
    series:
      "Bizning O'zbekiston miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Samarqandga sayohatlar - bu YUNESKO tomonidan “Madaniyatlar chorrahasi” sifatida abadiylashtirilib, insoniyatning Butunjahon merosi ro‘yxatiga kiritilgan qadimiy shahar bilan tanishish juda ta’sirli. Ushbu sayohatdan siz butun dunyoning eng yaxshi me'morlari tomonidan qayta tiklangan ulkan Temuriylar imperiyasining sobiq poytaxtining mashhur Registon maydoniga va boshqa ko'plab go'zal va qiziqarli diqqatga sazovor joylariga sayohatlardan yorqin taassurotlarni olib ketasiz.",
  },
  {
    id: 4,
    title: "Buxoro",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kutib olish va mehmonhonaga joylashtirish",
      "Kumiga 3 mahal milliy taom",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Buxoro",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "$700-1200",
    day: "7-15 kun",
    series:
      "Bizning O'zbekiston miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Bu yerning iqlimini yozda issiq va qurg‘oqchil deb ta’riflash mumkin, shuning uchun yilning shu vaqtida Buxoroga sayohat qilishni istasangiz, albatta o‘zingiz bilan soyabon va quyoshdan himoyalovchi krem ​​olib keling. Buxoroda qish ancha yumshoq, ammo issiq narsalarni e'tiborsiz qoldirmaslik kerak.",
  },
  {
    id: 5,
    title: "Registon",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kutib olish va mehmonhonaga joylashtirish",
      "Kumiga 3 mahal milliy taom",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Samarqand",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "$700-1200",
    day: "7-15 kun",
    series:
      "Bizning O'zbekiston miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Samarqandga sayohatlar - bu YUNESKO tomonidan “Madaniyatlar chorrahasi” sifatida abadiylashtirilib, insoniyatning Butunjahon merosi ro‘yxatiga kiritilgan qadimiy shahar bilan tanishish juda ta’sirli. Ushbu sayohatdan siz butun dunyoning eng yaxshi me'morlari tomonidan qayta tiklangan ulkan Temuriylar imperiyasining sobiq poytaxtining mashhur Registon maydoniga va boshqa ko'plab go'zal va qiziqarli diqqatga sazovor joylariga sayohatlardan yorqin taassurotlarni olib ketasiz.",
  },
  {
    id: 6,
    title: "Tashkent",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kutib olish va mehmonhonaga joylashtirish",
      "Kumiga 3 mahal milliy taom",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Tashkent",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "$700-1200",
    day: "7-15 kun",
    series:
      "Bizning O'zbekiston miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Shahar sayohati O‘zbekiston” mehmonxonasi ro‘parasidagi Amir Temur maydonidan boshlanadi.Siz chiptalarni to'g'ridan-to'g'ri avtobusda tanlangan vaqtdan 15 daqiqadan so'ng sotib olishingiz mumkin.Bu birinchi kelgan birinchi xizmat, biz band qilmaymiz.Avtobus qat'iy ravishda jadvalga muvofiq kamida 6 kishidan iborat bo'ladi! Kamchilik bo'lsa, keyingi reysga",
  },
];

function DetailNatsionalPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-4xl text-gray-700 font-bold md:text-4xl">
            {cardList[id].series}
          </h2>
        </div>
        <div className="mt-12 m-auto -space-y-2 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6  lg:p-8">
              <h3 className="text-3xl text-gray-700 font-semibold text-center">
                {cardList[id].city}
              </h3>
              <div>
                <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="text-2xl text-gray-700 font-bold leading-0">
                      {cardList[id].money}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-white  px-4 gap-y-3 pt-10">
                <div className="">
                  <span className="text-purple-500 font-semibold">
                    &#10003;
                  </span>
                </div>

                <div className="col-span-11 text-sm flex items-center font-light pl-2">
                  {cardList[id].tourHaqida}
                </div>

                <div className="col-span-12 h-[1px] bg-white "></div>

                <div>
                  <span className="text-purple-500 font-semibold">
                    &#10003;
                  </span>
                </div>

                <div className="col-span-11 text-sm flex items-center font-light pl-2">
                  {cardList[id].chiptaIchida[0]}
                </div>

                <div>
                  <span className="text-purple-500 font-semibold">
                    &#10003;
                  </span>
                </div>

                <div className="col-span-11 text-sm flex items-center font-light pl-2">
                  {cardList[id].chiptaIchida[2]}
                </div>

                <div>
                  <span className="text-purple-500 font-semibold">
                    &#10003;
                  </span>
                </div>

                <div className="col-span-11 text-sm flex items-center font-light pl-2">
                  {cardList[id].chiptaIchida[1]}
                </div>

                <div>
                  <span className="text-purple-500 font-semibold">
                    &#10003;
                  </span>
                </div>

                <div className="col-span-11 text-sm flex items-center font-light pl-2">
                  {cardList[id].city} {cardList[id].chiptaIchida[3]}
                </div>
                <div>
                  <span className="text-purple-500 font-semibold">
                    &#10003;
                  </span>
                </div>

                <div className="col-span-11 text-sm flex items-center font-light pl-2">
                  {cardList[id].chiptaIchida[4]}
                </div>

                <div>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12,2C6.477,2,2,6.477,2,12c0,1.592,0.382,3.091,1.043,4.427l-1.005,4.019c-0.229,0.915,0.6,1.745,1.516,1.516 l4.019-1.005C8.909,21.618,10.408,22,12,22c5.523,0,10-4.477,10-10C22,6.477,17.523,2,12,2z"
                      opacity=".35"
                    />
                    <path d="M11,17v-5c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v5c0,0.552-0.448,1-1,1h0C11.448,18,11,17.552,11,17z" />
                    <circle cx="12" cy="7.5" r="1.5" />
                  </svg>
                </div>

                <div className="col-span-11 text-sm flex items-center line-clamp-7 font-light pl-2">
                  {cardList[id].about}
                </div>
              </div>
              <p className="flex items-center justify-center space-x-2 text-lg text-gray-600 text-center">
                <span>Biz bilan boglaning</span>
                <a
                href="tel:+998977777777"
                className=" w-full flex flex-row items-center justify-center px-auto text-gray-800 py-3 px-6 text-center rounded-xl transition bg-gradient-to-r from-gray-400 via-blue-300 to-gray-400 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <span className=" text-center block">+998977777777</span>
              </a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailNatsionalPage;
