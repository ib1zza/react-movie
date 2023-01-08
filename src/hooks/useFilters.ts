import { useState } from "react";
type ISortTypes = "year.incr" | "year.decr";

interface ISortFilters {
  startYear?: number;
  endYear?: number;
  sort?: ISortTypes;
  genre?: string;
}
export const useFilters = (props: ISortFilters | void) => {
  const [sortFilters, onSortChange] = useState<ISortFilters>({
    startYear: props?.startYear || 1800,
    endYear: props?.endYear || 2025,
    sort: props?.sort || "year.incr",
    genre: props?.genre || undefined,
  });

  return {
    sortFilters,
    onSortChange,
  };
};
