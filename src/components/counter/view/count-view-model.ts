import { observable, runInAction } from "mobx";
import { Service } from "typedi";
import ModelStore from "../../../store/model-store";

const CounterProps = {
  value: observable,
};

@Service("CounterViewModel")
export class CounterViewModel extends ModelStore {
  initialProps = CounterProps;
  value = 0;

  inc = () => runInAction(() => this.value++);

  dec = () => runInAction(() => this.value--);
}
