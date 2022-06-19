import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai"

export default function () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <button
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu className="w-8 h-8 text-blue-500" />
          {/* <svg
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg> */}
        </button>
      ) : (
        <button
          className={`text-xl text-white fixed top-4 right-4 z-10 `}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiFillCloseCircle/>
        </button>
      )}

      <div
        className={`top-0 right-0 fixed bg-blue-500 sm:w-[35vw] w-[75vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h2 className="text-2xl text-white sm:text-black">Sidebar</h2>
      </div>
    </>
  );
}
