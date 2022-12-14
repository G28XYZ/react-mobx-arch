import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../../../hooks/use-store";
import useTranslate from "../../../hooks/use-translate";

export const Counter = observer(() => {
  const lang = useTranslate().lang() as any;

  const counterStore = useStore().get("CounterViewModel");
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3 style={{ margin: 0 }}>{lang.counter.title}</h3>
      <button onClick={counterStore.dec}> - </button>
      <div>{counterStore.value}</div>
      <button onClick={counterStore.inc}> + </button>
    </div>
  );
});
