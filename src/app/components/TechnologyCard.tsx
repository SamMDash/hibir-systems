import Image from "next/image";

const TechnologyCard = ({ src, alt, name }: { src: string; alt: string; name: string }) => {
  return (
    <div className="flex items-center gap-2 text-lg">
      <Image src={src} alt={alt} width={40} height={40} />
      <span>{name}</span>
    </div>
  );
};

export default TechnologyCard;
