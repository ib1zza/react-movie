import { useState } from "react";
type ISortTypes = "year.incr" | "year.decr";

interface ISortFilters {
  startYear?: number;
  endYear?: number;
  sort?: ISortTypes;
  genre?: string;
  titleType?: string;
}
export const useFilters = (props: ISortFilters | void) => {
  const [sortFilters, onSortChange] = useState<ISortFilters>({
    startYear: props?.startYear || 2000,
    endYear: props?.endYear || 2023,
    sort: props?.sort || "year.incr",
    genre: props?.genre || undefined,
    titleType: props?.titleType || undefined,
  });

  return {
    sortFilters,
    onSortChange,
  };
};
