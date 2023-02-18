import React, { useEffect, useState } from "react";
import s from "./PageSwitcher.module.scss";

interface Props {
  page: number;
  onChange: (value: number) => void;
}
const PageSwitcher: React.FC<Props> = ({ page, onChange }) => {
  const [pageNums, setPageNums] = useState<Array<number | string>>([page]);

  useEffect(() => {
    let array: Array<number | string> = [];
    if (page <= 3) {
      for (let i = 1; i <= 6; i++) {
        array.push(i);
      }
    } else {
      array.push(1, "separator");

      for (let i = page - 1; i < page; i++) {
        array.push(i);
      }
      array.push(page, page + 1, page + 2);
    }
    setPageNums(array);
  }, [page]);
  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        {pageNums.map((el) => {
          if (typeof el === "string") {
            return <span className={s.separator}>...</span>;
          }
          return (
            <button
              className={el === page ? s.active : ""}
              onClick={() => onChange(el as number)}
              key={el}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PageSwitcher;
