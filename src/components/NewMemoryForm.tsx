"use client";

import { Camera } from "lucide-react";

import React, { FormEvent } from "react";
import FilePicker from "./FilePicker";

const NewMemoryForm = () => {
  function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
  }
  return (
    <form onSubmit={handleCreateMemory} className="flex flex-1 flex-col gap-2">
      <div className="item-center flex gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-3 w-3" /> Anexar mídia
        </label>

        <label
          htmlFor="is_public"
          className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            type="checkbox"
            name="is_public"
            id="is_public"
            value="true"
          />
          tornar pública
        </label>
      </div>

      <FilePicker />

      <textarea
        name="content"
        id="content"
        spellCheck
        className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-0"
        placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre esta experiência que você quer lembrar para sempre."
      />

      <button
        type="submit"
        className="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-semibold uppercase leading-none text-black hover:bg-green-600"
      >
        Salvar
      </button>
    </form>
  );
};

export default NewMemoryForm;
