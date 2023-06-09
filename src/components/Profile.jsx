import Image from "next/image";
import { getUser } from "@lib/auth";
import Link from "next/link";
const Profile = () => {
  const { name, avatarUrl } = getUser();

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <p className="max-w-[140px] text-sm leading-snug">
        {name} <br />{" "}
        <a
          href="/api/auth/logout"
          className="block cursor-pointer text-red-300 hover:underline"
        >
          Sair
        </a>
      </p>
    </div>
  );
};

export default Profile;
