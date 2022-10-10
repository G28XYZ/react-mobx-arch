import { observable, runInAction } from "mobx";
import ModelStore from "../../store/model-store";

const CounterProps = {
  value: observable,
};

class CounterView extends ModelStore {
  initialProps = CounterProps;
  value = 0;

  inc = () => runInAction(() => this.value++);

  dec = () => runInAction(() => this.value--);
}

export default CounterView;
