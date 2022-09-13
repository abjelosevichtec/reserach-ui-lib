import Image from "next/image";
import { IconTruckDelivery } from "@tabler/icons";

function CardComponent({ price, title, imageSrc }) {
  return (
    <div className="overflow-hidden border rounded-md shadow">
      <div className="relative w-full h-[277px]">
        <Image src={imageSrc} objectFit="cover" layout="fill" alt="Norway" />
      </div>

      <div className="flex flex-col justify-between p-4 space-y-3 h-1/2">
        <div className="space-y-3">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="space-x-2">
            <span className="px-2 py-1 text-white bg-green-500 rounded-md">
              direct
            </span>
            <span>Mison</span>
          </div>
          <div className="flex space-x-2">
            <IconTruckDelivery color="green" size={18} />
            <span className="text-sm">Besplatna dostava</span>
          </div>
        </div>
        <div className="grid grid-cols-2 pb-2">
          <span className="col-span-2 text-red-500 line-through">
            {price?.original}
          </span>
          <span>{price?.current}</span>
          <span className="flex justify-end">Usteda</span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
