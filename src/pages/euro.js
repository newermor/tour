import Layout from "../components/layout";

const cardList = [
  {
    id: 1,
    title: "America",
    city: "New York",
    money: "$ 3000 - 4000",
    url: "https://i.pinimg.com/originals/52/bc/5c/52bc5c981dc384375bc45627a23fad38.jpg",
    day: "7-15 kun",
    number: "4.5",
    Series: "Tour muddati",
  },
  {
    id: 2,
    title: "switzerland",
    city: "Bern",
    money: "$ 3000 - 4000",
    url: "https://i.pinimg.com/originals/73/45/d2/7345d27277803c40105a5b0b3fdf119e.jpg",
    day: "7-15 kun",
    number: "4.5",
    Series: "Tour muddat",
  },
  {
    id: 3,
    title: "Japan",
    city: "Tokio",
    money: "$ 3000 - 4000",
    url: "https://telegra.ph/file/8af7246b89e2be5aff347.jpg",
    day: "7-15 kun",
    number: "4.5",
    Series: "Tour muddat",
  },
  {
    id: 4,
    title: "Rossia",
    city: "Moscow",
    money: "$ 3000 - 4000",
    url: "https://i0.wp.com/dikmi.ru/assets/images/new_year/sssr/sssr_1.jpg",
    day: "7-15 kun",
    number: "4.5",
    Series: "Tour muddat",
  },
  {
    id: 5,
    title: "China",
    city: "Pekin",
    money: "$ 3000 - 4000",
    url: "https://avatars.mds.yandex.net/i?id=314b852bb953de22f3bec477b1e502ac_l-5113178-images-thumbs&ref=rim&n=13&w=865&h=1080",
    day: "7-15 kun",
    number: "4.5",
    Series: "Tour muddat",
  },
  {
    id: 6,
    title: "Germany",
    city: "Berlin",
    money: "$ 3000 - 4000",
    url: "https://ya-mechtayu.ru/uploads/posts/2020-01/1578581159_df4dbac0-2f61-453a-91f4-194d658fce78.jpeg",
    day: "7-15 kun",
    number: "4.5",
    Series: "Tour muddat",
  },
];

function Euro() {
  return (
    <Layout>
      <div class="h-full bg-white mt-10  grid grid-cols-1 md:grid-cols-2 gap-10 justify-center sm:py-12">
        {cardList.map((e) => {
          return (
            <div key={e.id} class="py-3 sm:max-w-xl sm:mx-auto  m-4">
              <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
                <div class="h-48 overflow-visible w-1/2">
                  <img
                    class="rounded-3xl shadow-lg object-contain object-center transition duration-500 ease-in-out hover:transform hover:scale-150 md:hover:-translate-y-1 md:hover:scale-110 "
                    src={e.url}
                    alt="images"
                  />
                </div>
                <div class="flex flex-col w-1/2 space-y-4">
                  <div class="flex justify-between items-start">
                    <h2 class="text-3xl font-bold line-clamp-1">{e.title}</h2>
                    <div class="bg-yellow-400 hidden md:block font-bold rounded-xl p-2">
                      {e.number}
                    </div>
                  </div>
                  <div>
                    <div class="bg-yellow-400 inline-block  md:hidden font-bold rounded-xl p-2">
                      {e.number}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-400 line-clamp-1">
                      {e.Series}
                    </div>
                    <div class="text-lg text-gray-800 line-clamp-1">
                      {e.day}
                    </div>
                  </div>
                  <p class=" text-gray-400 max-h-40 overflow-y-hidden line-clamp-1">
                    {e.city}
                  </p>
                  <div class="flex text-2xl font-bold line-clamp-1">
                    {e.money}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Euro;

// <div class="py-3 sm:max-w-xl sm:mx-auto">
//     <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
//       <div class="h-48 overflow-visible w-1/2">
//           <img class="rounded-3xl shadow-lg" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt=""/>
//       </div>
//       <div class="flex flex-col w-1/2 space-y-4">
//         <div class="flex justify-between items-start">
//           <h2 class="text-3xl font-bold">Sweet Tooth: El niño ciervo</h2>
//           <div class="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
//         </div>
//         <div>
//           <div class="text-sm text-gray-400">Series</div>
//           <div class="text-lg text-gray-800">2019</div>
//         </div>
//           <p class=" text-gray-400 max-h-40 overflow-y-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         <div class="flex text-2xl font-bold text-a">$83.90</div>
//       </div>

//     </div>

//   </div>
