import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../../hooks/use-store";
import Spinner from "../../spinner/Spinner";

export const Random = observer(() => {
  const randomView = useStore().get("RandomViewModel");

  useEffect(() => {
    randomView.initInterval();
    return () => randomView.onClearInterval();
  }, []);

  return (
    <div>
      <h3>RandomCat</h3>
      <Spinner active={randomView.waiting}>
        <img src={randomView.catLink} alt="" style={{ width: 400 }} />
      </Spinner>
    </div>
  );
});
