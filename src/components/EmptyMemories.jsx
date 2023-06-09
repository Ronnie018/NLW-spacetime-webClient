import Link from "next/link";

const EmptyMemories = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <Link href="/memories/new" className="underline hover:text-gray-50">
          criar agora!
        </Link>
      </p>
    </div>
  );
};

export default EmptyMemories;
