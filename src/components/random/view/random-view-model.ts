import { observable, runInAction } from "mobx";
import { Service } from "typedi";
import ModelStore from "../../../store/model-store";

const RandomProps = {
  catLink: observable,
  waiting: observable,
};

@Service("RandomViewModel")
export class RandomViewModel extends ModelStore {
  initialProps = RandomProps;
  catLink = "";
  waiting = false;
  interval: ReturnType<typeof setTimeout>;

  initInterval() {
    !this.catLink && this.getCat();
    this.interval = setInterval(() => this.getCat(), 6e4);
  }

  onClearInterval = () => clearInterval(this.interval);

  async getCat() {
    // this.setState(this.getProps(), "Обновление картинки");
    runInAction(() => (this.waiting = true));
    try {
      const response = await this.services.api.request({ url: "/random/img/cat" });
      runInAction(() => {
        this.catLink = response.link;
      });
    } catch (e) {
      // this.setState(this.getProps(), "Ошибка при запросе картинки");
      runInAction(() => {
        this.catLink = "Error response";
      });
    } finally {
      runInAction(() => {
        this.waiting = false;
      });
    }
  }
}
