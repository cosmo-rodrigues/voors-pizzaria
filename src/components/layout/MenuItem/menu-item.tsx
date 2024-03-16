import Image from 'next/image';

export interface MenuItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
}
export default function MenuItem({ id, image, name, price }: MenuItemProps) {
  return (
    <div>
      <em>{id}</em>
      <Image src={image} height={100} width={100} alt={name} />
      <h3>{name}</h3>
      <span>R${price}</span>
    </div>
  );
}
