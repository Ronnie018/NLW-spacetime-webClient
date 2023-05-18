import Link from "next/link";

const Copyright = () => {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com S2 no NLW da{" "}
      <Link
        className="underline hover:text-gray-100"
        href={"https://rocketseat.com.br"}
        target="_blank"
        rel="noreferrer noopener"
      >
        Rocketseat
      </Link>
      .
    </div>
  );
};

export default Copyright;
