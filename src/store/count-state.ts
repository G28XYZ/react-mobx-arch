import { observable, runInAction } from "mobx";
import ModelStore from "./model-store";

const CounterProps = {
  value: observable,
};

class CounterStore extends ModelStore {
  initialProps = CounterProps;
  value = 0;

  inc = () => runInAction(() => this.value++);

  dec = () => runInAction(() => this.value--);
}

export default CounterStore;
