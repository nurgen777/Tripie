import React from "react";
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";

const posts = [
  {
    id: 1,
    category: "Tips and Tricks",
    image: "/dog.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava.svg",
    date: "25 May, 2021",
    views: 160,
  },
  {
    id: 2,
    category: "Exploring",
    image: "/priroda.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava2.svg",
    date: "25 May, 2021",
    views: 10160,
  },
  {
    id: 3,
    category: "Exploring",
    image: "/ocean.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava3.svg",
    date: "25 May, 2021",
    views: 9160,
  },
  {
    id: 4,
    category: "Exploring",
    image: "/most.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava4.svg",
    date: "27 November, 2018",
    views: 260,
  },
  {
    id: 5,
    category: "Travel",
    image: "/led.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava5.svg",
    date: "12 December, 2025",
    views: 12360,
  },
  {
    id: 6,
    category: "How To",
    image: "/kamaz.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava6.svg",
    date: "20 May, 2017",
    views: 191680,
  },
  {
    id: 7,
    category: "Off Topic",
    image: "/beatiful.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava4.svg",
    date: "30 Mart, 2024",
    views: 1600,
  },
  {
    id: 8,
    category: "Exploring",
    image: "/ovechka.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava5.svg",
    date: "23 February, 2019",
    views: 1260,
  },
  {
    id: 9,
    category: "Exploring",
    image: "/kamaz2.png",
    title: "Convergent and divergent plate margins",
    author: "Isabelle O’Conner",
    avatar: "/ava6.svg",
    date: "05 April, 2020",
    views: 3000,
  },
];

const MaketPage = ({ activeFilter }) => {
  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-0.5 py-16 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-1xl mx-auto">
        {filteredPosts.map((post) => (
          <div key={post.id} className="group">
            <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-200 aspect-square">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 bg-[#23262F] text-white text-xs font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <div className="mt-4 rounded-3xl overflow-hidden">
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold leading-snug text-gray-800">
                  {post.title}
                </h3>

                <div className="flex items-center gap-3 mt-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                  />
                  <p className="text-sm text-gray-700">{post.author}</p>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>
              <div className="flex justify-between items-center px-4 sm:px-5 py-3 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-gray-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegUser className="text-gray-400" />
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="border-[#E6E8EC] font-semibold border-2 rounded-full px-7 py-3">
          Loading
        </button>
      </div>
    </div>
  );
};

export default MaketPage;
