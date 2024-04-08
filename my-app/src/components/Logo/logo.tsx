import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  social: {
    logo: StaticImageData;
    link: string;
  };
}

export default function LogoMe({ social }: Props) {
  return (
    <Link href={social.link}>
      <Image src={social.logo} alt="Social Logo" width={24} height={24} />
    </Link>
  );
}
