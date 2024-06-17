import { IremoteConfig, Iconfig } from "./remoteConfig.interface";
import fs from "fs/promises";

class RemoteConfig implements IremoteConfig {
  async getConfig(): Promise<Iconfig | null> {
    const readConfig = await fs.readFile("./src/main.configData.json", "utf-8");
    try {
      if (!readConfig.length || !readConfig) throw new Error("Файл дефолтных настроек не найден или пуст!");
      const result = JSON.parse(readConfig);
      return result;
    } catch (err) {
      return null;
    }
  }
}

export = new RemoteConfig();
