/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllCategories } from "../../redux/slices/categoriesSlice";
import React from "react";


export const Categories: React.FC = () => {
  const categories = useSelector(selectAllCategories);

  return (
    <ul>
      {categories.map((category) => (
        <ListItem key={category.id} item={category} />
      ))}
    </ul>
  );
};
