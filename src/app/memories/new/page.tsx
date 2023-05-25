"use client";

import { Camera, ChevronLeft } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import FilePicker from "@components/FilePicker";
import NewMemoryForm from "@components/NewMemoryForm";

export default function NewMemory() {
  const [media, setMedia] = useState(null as File | null);

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4 " />
        Voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  );
}
