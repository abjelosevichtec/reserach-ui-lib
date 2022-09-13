import Image from "next/image";

import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import data from "./data.json";

function Footer() {
  const groups = data.data.map((group) => {
    const links = group.links.map((link, index) => (
      <a
        key={index}
        className="block py-2 text-sm"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    ));

    return (
      <div className="w-[120px]" key={group.title}>
        <h3 className="mb-3 text-lg font-bold">{group.title}</h3>
        {links}
      </div>
    );
  });

  return (
    <footer className="pt-10 mt-4 bg-gray-100 border-t-gray-600">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div className="max-w-[200px]">
            <Image
              layout="fixed"
              src="/logo.svg"
              alt="logo"
              width={124}
              height={48}
            />
            <span className="mt-2 text-xs text-gray-500">
              Build fully functional accessible web applications faster than
              ever
            </span>
          </div>
          <div className="flex flex-wrap">{groups}</div>
        </div>
        <div className="flex items-center justify-between py-2 mt-2 border-t-gray-500">
          <span className="text-xs text-gray-500">
            © 2022 mantine.dev. All rights reserved.
          </span>
          <div className="flex justify-end space-x-2">
            <IconBrandTwitter size={18} stroke={1.5} />
            <IconBrandYoutube size={18} stroke={1.5} />
            <IconBrandInstagram size={18} stroke={1.5} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
