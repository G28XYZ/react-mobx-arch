import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/use-store";
import Spinner from "../spinner/Spinner";

const Random = observer(() => {
  const randomStore = useStore().get("random");
  return (
    <div>
      <h3>RandomCat</h3>
      <Spinner active={randomStore.waiting}>
        <img src={randomStore.catLink} alt="" style={{ width: 400 }} />
      </Spinner>
    </div>
  );
});

export default Random;
