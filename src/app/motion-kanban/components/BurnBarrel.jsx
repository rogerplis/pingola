"use client";
import { FaFire } from "react-icons/fa";
import { FiPlus, FiTrash } from "react-icons/fi";
import { useState } from "react";

export const BurnBarrel = ({ setCards }) => {
    const [active, setActive] = useState(false);
  
    const handleDragOver = (e) => {
      e.preventDefault();
      setActive(true);
    };
  
    const handleDragLeave = () => {
      setActive(false);
    };
  
    const handleDragEnd = (e) => {
      const cardId = e.dataTransfer.getData("cardId");
  
      setCards((prev) => prev.filter((c) => c.id !== cardId));
      setActive(false);
    };
    return (
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        className={`mt-10 flex h-5 w-56 shrink-0 items-center justify-center rounded border text-3xl ${
          active
            ? "bg-red-800/20 border-red-800 text-red-500"
            : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
        }`}
      >
        {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
      </div>
    );
  };