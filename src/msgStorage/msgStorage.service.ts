import { IStorageService, storage } from "./msgStorage.interface";

class StorageService implements IStorageService {
  storage: storage = {};
}

export = new StorageService();
