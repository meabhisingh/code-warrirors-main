"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export const SearchForm = () => {
  const placeholders = [
    "Search...",
    "Course",
    "Technology",
    "Question",
    "Instructor",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};
