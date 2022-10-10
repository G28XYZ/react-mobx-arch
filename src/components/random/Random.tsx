import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useStore } from "../../hooks/use-store";
import Spinner from "../spinner/Spinner";

const Random = observer(() => {
  const randomView = useStore().get("random");

  useEffect(() => {
    randomView.initInterval();
    return () => randomView.clearInterval();
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

export default React.memo(Random);
