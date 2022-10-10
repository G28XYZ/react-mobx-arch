import { observable, runInAction } from "mobx";
import ModelStore from "./model-store";

const RandomProps = {
  catLink: observable,
  waiting: observable,
};

class RandomStore extends ModelStore {
  initialProps = RandomProps;
  catLink = "";
  waiting = false;
  interval: ReturnType<typeof setTimeout>;

  initInterval() {
    !this.catLink && this.getCat();
    this.interval = setInterval(() => this.getCat(), 10000);
  }

  clearInterval = () => clearInterval(this.interval);

  async getCat() {
    this.setState(this.getProps(), "Обновление картинки");
    runInAction(() => (this.waiting = true));
    try {
      const response = await this.services.api.request({ url: "/random/img/cat" });
      runInAction(() => {
        this.catLink = response.link;
      });
    } catch (e) {
      this.setState(this.getProps(), "Ошибка при запросе картинки");
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

export default RandomStore;
