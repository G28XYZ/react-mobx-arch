import { observer } from "mobx-react-lite";
import { useStore } from "./NotesContext";

const Counter = observer(() => {
  const counterStore = useStore().get("counter");
  console.log(counterStore);
  return (
    <div style={{ display: "flex" }}>
      <button onClick={counterStore.dec}> - </button>
      <div>{counterStore.value}</div>
      <button onClick={counterStore.inc}> + </button>
    </div>
  );
});

export default Counter;
