import Image from "next/image";

import {
  IconSearch,
  IconHeart,
  IconUserPlus,
  IconShoppingCart,
} from "@tabler/icons";

function Header() {
  return (
    <div className="shadow fixed py-3 px-6 items-center justify-center grid grid-cols-header auto-cols-fr gap-x-6 gap-y-0 w-full h-20 bg-white z-[99999]">
      <Image
        layout="fixed"
        src="/logo.svg"
        alt="logo"
        width={124}
        height={48}
      />
      <div className="relative flex items-center w-full">
        <input
          placeholder="Unesi pojam za pretragu..."
          name="search"
          className="w-full p-2 border rounded-md"
        />
        <div className="absolute flex items-center justify-center w-10 h-10 rounded-full cursor-pointer -right-4 bg-primary-orange">
          <IconSearch color="white" size={24} />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <div className="flex items-center space-x-1">
          <IconHeart size={18} />
          <div className="relative">
            <a className="no-underline">Lista zelja</a>
            <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-black rounded-full -top-1 -right-2">
              3
            </span>
          </div>
        </div>
        <div className="border" />
        <IconUserPlus size={18} />
        <div className="border" />
        <div className="relative">
          <IconShoppingCart size={18} />
          <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-black rounded-full -top-2 -right-2">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
