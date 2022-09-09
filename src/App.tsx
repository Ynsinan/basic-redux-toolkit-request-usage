import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchData, getSportProgram } from "./slice/store/apiSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { RootObject } from "global";

function App() {
  const [isActive, setIsActive] = useState<number>();
  const sportProgram: RootObject = useAppSelector(getSportProgram);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const toggle = (index: any) => {
    if (isActive === index) {
      return setIsActive(undefined);
    }
    setIsActive(index);
  };
  return (
    <div className="App">
      {sportProgram &&
        sportProgram?.data?.cf?.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-item-header"
              onClick={() => toggle(index)}
              key={index}
            >
              {item.cgn}
            </div>
            {isActive === index ? (
              <div className="accordion-item-body">
                {item.lf.map((item, index) => (
                  <div key={index}>
                    {item.ln} / {item.total}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
    </div>
  );
}

export default App;
