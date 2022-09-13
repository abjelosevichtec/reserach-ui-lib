import Image from "next/image";

function CardComponent({ title, imageSrc }) {
  return (
    <div className="overflow-hidden border rounded-md shadow">
      <div className="relative w-full h-[277px]">
        <Image src={imageSrc} objectFit="cover" layout="fill" alt="Norway" />
      </div>
      <h3 className="p-2 font-semibold text-center">{title}</h3>
    </div>
  );
}

export default CardComponent;
