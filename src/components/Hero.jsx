import SpaceTimeLogo from "@assets/spacetime_logo.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="space-y-5">
      <Image src={SpaceTimeLogo} alt="spacetime logo" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Sua capsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (Se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-semibold uppercase leading-none text-black hover:bg-green-600"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  );
};

export default Hero;
