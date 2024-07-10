import { MdOutlineAutoAwesome } from "react-icons/md";

export default function AiCarousel() {
  const CreateCarocelButton = (
    <button className="p-1 px-2 flex justify-center items-center gap-1 bg-gray-500 rounded-md text-white max-w-[235px] sm:w-[235px]">
      <MdOutlineAutoAwesome />
      Generate Carousel
    </button>
  );
  return (
    <div className="w-full">
      <div className="w-full p-3 border-b">
        <h4 className="text-xl font-medium text-gray-600">
          Carousel Generator
        </h4>
      </div>
      <div className="w-full p-3 border-b flex justify-center sm:flex-row flex-col items-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <ul className="menu sm:w-auto -my-2 menu-horizontal px-0">
            <li>
              <details>
                <summary className=" px-3 p-1 text-md border min-w-[120px] ">
                  Topic
                </summary>
                <ul className="p-2 sm:w-[150px] border border-gray-500 rounded-md">
                  <li className="uppercase rounded-md hover:bg-blue-50">
                    <a>Topic</a>
                  </li>
                  <li className="uppercase rounded-md hover:bg-blue-50">
                    <a>Blog</a>
                  </li>
                  <li className="uppercase rounded-md hover:bg-blue-50">
                    <a>Short</a>
                  </li>
                  <li className="uppercase rounded-md hover:bg-blue-50">
                    <a>Youtube</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <div className="block sm:hidden">{CreateCarocelButton}</div>
        </div>
        <input
          type="text"
          placeholder="Inter a Youtube Link (< 10 min video)"
          className="p-1 px-2 rounded-md border w-full text-md"
        />
        <div className="hidden sm:block">{CreateCarocelButton}</div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 p-3 md:grid-cols-3 gap-3">
        <div className="w-full col-span-1 md:col-span-2 rounded-md p-10 bg-black"></div>
        <div className="w-full p-10 bg-black rounded-md"></div>
      </div>
    </div>
  );
}
