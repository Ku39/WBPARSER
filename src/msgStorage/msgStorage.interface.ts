export interface storage {
  [userId: number]: Record<string, number[] | undefined> | undefined;
}

export interface IStorageService {
  storage: storage;
}
