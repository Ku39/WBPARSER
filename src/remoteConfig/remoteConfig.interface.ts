export interface Iconfig {}

export interface IremoteConfig {
  getConfig(): Promise<Iconfig | null>;
}
