import Layout from "../components/layout";

const cardList = [
  {
    id: 1,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 2,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 3,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 4,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 5,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 6,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 7,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
  {
    id: 8,
    title: "tittle",
    description: "description",
    money:"$290.50",
    url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg",
    day: "2022-12-05",
    number: "7.5",
    Series:"Series"
  },
]

function Tour() {
  return (
    <Layout>
    <div class="h-full bg-white mt-10  grid grid-cols-2 gap-10 justify-center sm:py-12">
  
  {cardList.map((e)=>{
    return <div key={e.id} class="py-3 sm:max-w-xl sm:mx-auto  m-12">
        <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div class="h-48 overflow-visible w-1/2">
              <img class="rounded-3xl shadow-lg" src={e.url} alt=""/>
          </div>
          <div class="flex flex-col w-1/2 space-y-4">
            <div class="flex justify-between items-start">
              <h2 class="text-3xl font-bold">{e.title}</h2>
              <div class="bg-yellow-400 font-bold rounded-xl p-2">{e.number}</div>
            </div>
            <div>
              <div class="text-sm text-gray-400">{e.Series}</div>
              <div class="text-lg text-gray-800">{e.day}</div>
            </div>
              <p class=" text-gray-400 max-h-40 overflow-y-hidden">{e.description}</p>
            <div class="flex text-2xl font-bold text-a">{e.money}</div>
          </div>
    
    
          
    
        </div>
        
      </div>
  })}
  

    </div>
    
    </Layout>
  );
}

export default Tour;

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