import Player from "./player";

export default class DataHandler {
  list = ["getStats", "lol", "mau"];
  statuses = ["energy", "mood", "health", "sleep"];
  player: Player;
  public constructor() {}

  // constructor(player: Player) {
  //   this.player = player;
  // }

  public getMessage(message: string) {
    console.log("got", message);
    this.checkMessage(message);
  }

  private checkMessage(message: string) {
    let data = this.getArray(message);
    if (data.length == 1) {
      let found = this.list.find((element) => element == message);
      console.log("found", found);
    } else {
      let statusHealth;
      data.forEach((element) => {
        statusHealth = this.statuses.find(
          (status) => status.toLowerCase == element.toLowerCase
        );

        console.log(statusHealth);
        this.player.changeBarValue(0);
      });
    }
  }

  private getArray(message: string) {
    let data: string[];
    data = message.split(new RegExp("[\n\t ]"));
    data.forEach((element) => {
      element.trim();
      // console.log(element);
    });
    return data;
  }
}
