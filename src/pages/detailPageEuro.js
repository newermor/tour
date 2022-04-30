import { useParams } from "react-router-dom";

const cardList = [
  {
    id: 1,
    title: "",
    chiptaIchida: [],
    city: "",
    tourHaqida: "",
    money: "",
    day: "",
    series: "",
  },
  {
    id: 1,
    title: "AMERICA",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kumiga 3 mahal euro taom",
      "Kutib olish va mehmonhonaga joylashtirish",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "New York",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "3000 4000",
    day: "7-15 kun",
    series:
      "Bizning jahon miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Boshqa an'anaviy 'hop-on, hop-off' turlaridan farqli o'laroq, biz avtobusga chiqmaymiz. Biz Nyu-York bo'ylab mahalliy aholi kabi - POOT va METROL orqali harakatlanamiz. Ushbu piyoda sayohat sizga shaharni yanada yaqinroq va batafsil ko'rsatib beradi.",
  },
  {
    id: 2,
    title: "SWITZERLAND",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kumiga 3 mahal euro taom",
      "Kutib olish va mehmonhonaga joylashtirish",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Tsyurix",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "3000 4000",
    day: "7-15 kun",
    series:
      "Bizning jahon miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Tsyurixda boshlang va Myunxenda tugaydi! Oberammergau bilan Shveytsariyaning eng yaxshisi - Faith-Based Travel festivali va tadbirlari bilan sizni Tsyurix, Shveytsariya va Yevropaning boshqa 13 yo'nalishi bo'ylab olib boradigan 12 kunlik sayohat paketiga ega bo'lasiz.",
  },
  {
    id: 3,
    title: "JAPAN",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kumiga 3 mahal euro taom",
      "Kutib olish va mehmonhonaga joylashtirish",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Tokio",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "3000 4000",
    day: "7-15 kun",
    series:
      "Bizning jahon miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Siz dunyodagi eng yirik shaharlardan birining manzarasidan bahramand bo'ling. Turning marvaridi - Asakusa hududi. Siz nafaqat ajoyib Sensoji ibodatxonasi majmuasidan bahramand bo'lasiz, balki do'konlari joylashgan uzun ko'chalarda istalgan suvenirni ham sotib olishingiz mumkin.    ",
  },
  {
    id: 4,
    title: "RUSSIA",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kumiga 3 mahal euro taom",
      "Kutib olish va mehmonhonaga joylashtirish",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Moscow",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "3000 4000",
    day: "7-15 kun",
    series:
      "Bizning jahon miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Moskva mamlakatning ziddiyatlarini eng keskin tarzda namoyish etadi. 10 millionlik bu shaharda qadimiy va zamonaviy yonma-yon joylashgan. Qizil maydon, Kreml, Avliyo Vasiliy soborining to'qqiz gumbazi, Lenin maqbarasi, KGB muzeyi va Moskvaning buyuk va dahshatli o'tmishining boshqa timsollarini ko'rish uchun bezakli stantsiyalardan biridan metroga tushing, so'ngra Boulevard Ring yoki xarid qiling. Pushkin maydonida odamlar tomosha qilishadi.",
  },
  {
    id: 5,
    title: "CHINA",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kumiga 3 mahal euro taom",
      "Kutib olish va mehmonhonaga joylashtirish",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Pekin",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "3000 4000",
    day: "7-15 kun",
    series:
      "Bizning jahon miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about:
      "Ushbu sayohat dasturi eng qiziqarli - Buyuk Xitoy devori, Xitoy imperatorlarining ikkita qarorgohi - Qish va Yoz, mashhur Osmon ibodatxonasi va eng katta lamaistlar ibodatxonasi - Yonghegun! Keyin sayohatni taxminan davom ettirishingiz mumkin. Xaynan, Xitoyning boshqa shaharlariga borish yoki uyga qaytish - bu sizga bog'liq!",
  },
  {
    id: 6,
    title: "GERMANY",
    chiptaIchida: [
      "Tour ichida: borish va qaytish",
      "Kumiga 3 mahal euro taom",
      "Kutib olish va mehmonhonaga joylashtirish",
      "boylab ekskursiya ",
      "Ekskursiya transportlari ",
    ],
    city: "Berlin",
    tourHaqida: "Faqat sayohat guruhingizga qaratilgan sayohatdan rohatlaning",
    money: "3000 4000",
    day: "7-15 kun",
    series:
      "Bizning jahon miqiyosidagi tarixchi gidlarimiz sizga hamrohlik qladi",
    about: "Germaniyaning eng mashhur shaharlariga tashrif buyurish ko'pchilik uchun ustuvor vazifadir. Ammo ajoyib qishloqlarda dam olish, shuningdek, ajoyib tadbirlarda qatnashish ham mumkin!",
  },
];

function Daetail() {
  const { id } = useParams();
  return (
    <div className=" py-10 bg-gradient-to-r from-gray-300 via-blue-200 to-gray-300 ">
      <div className="h-screen flex justify-center  items-center bg-gradient-to-r from-gray-300 via-blue-200 to-gray-300 ">
        <card className="rounded w-72 shadow-xl flex flex-col text-gray-700">
          <p className="font-semibold bg-white  rounded-t px-4 py-2">
            {" "}
            {cardList[id].title}
          </p>

          <div className="flex flex-row items-start pt-8 bg-white bg-opacity-10 pl-12 pr-10 gap-3">
            <div className="flex flex-row gap-2">
              <span className="text-base text-gray-700"> $ </span>
              <p className="text-2xl text-gray-700 font-semibold">
                {cardList[id].money}
              </p>
            </div>
            <p className="font-light text-gray-700 line-clamp-5 text-xm">
              {cardList[id].series}
            </p>
          </div>

          <div className="flex flex-row items-center justify-center bg-white bg-opacity-10 pt-5 pb-10">
            <p className="text-xs px-7 text-gray-400 border border-gray-500 border-opacity-20 rounded-full py-1 ">
              {cardList[id].day}
            </p>
          </div>

          <div className="grid grid-cols-12 bg-white  px-4 gap-y-3 pt-10">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              {cardList[id].tourHaqida}
            </div>

            <div className="col-span-12 h-[1px] bg-white "></div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              {cardList[id].chiptaIchida[0]}
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              {cardList[id].chiptaIchida[2]}
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              {cardList[id].chiptaIchida[1]}
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="col-span-11 text-sm flex items-center font-light pl-2">
              {cardList[id].city} {cardList[id].chiptaIchida[3]}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
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
            <div className="col-span-12 mt-5 mb-5 text-gray-100">
              <button className="rounded hover:bg-teal-400 bg-teal-500 w-full py-3">
                Biz bilan boglaning
              </button>
            </div>
          </div>
        </card>
      </div>
    </div>
  );
}

export default Daetail;
