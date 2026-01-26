import { safeJsonStringify } from "../utils";
import { type IStorage } from "./storageInterface";

// memory fallback storage for environments without localStorage
const memoryStorage: Record<string, string> = {};

export type GeminiStorageConfig = {
  scope?: string;
  module?: string;
};

/**
 * Default web storage implementation using localStorage
 * For mobile platforms, implement a custom storage class that implements IStorage
 */
export class GeminiStorage implements IStorage {
  private scope: string;
  private module: string;

  constructor({ scope = "@gemini", module = "wallet" }: GeminiStorageConfig = {}) {
    this.scope = scope;
    this.module = module;
  }

  private scopedKey(key: string): string {
    return `${this.scope}.${this.module}.${key}`;
  }

  public async storeObject<T>(key: string, item: T): Promise<void> {
    const json = safeJsonStringify(item);
    await this.setItem(key, json);
  }

  public async loadObject<T>(key: string, fallback: T): Promise<T> {
    const item = await this.getItem(key);
    if (!item) {
      await this.storeObject(key, fallback);
      return fallback;
    }

    try {
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error parsing JSON for key ${key}:`, error);
      return fallback;
    }
  }

  // eslint-disable-next-line require-await
  public async setItem(key: string, value: string): Promise<void> {
    const scoped = this.scopedKey(key);

    try {
      localStorage.setItem(scoped, value);
    } catch (e) {
      // fallback to memory storage if localStorage is not available
      console.warn("localStorage not available, using memory storage", e);
      memoryStorage[scoped] = value;
    }
  }

  // eslint-disable-next-line require-await
  public async getItem(key: string): Promise<string | null> {
    const scoped = this.scopedKey(key);

    try {
      return localStorage.getItem(scoped);
    } catch (e) {
      // fallback to memory storage if localStorage is not available
      console.warn("localStorage not available, using memory storage", e);
      return memoryStorage[scoped] || null;
    }
  }

  // eslint-disable-next-line require-await
  public async removeItem(key: string): Promise<void> {
    const scoped = this.scopedKey(key);

    try {
      localStorage.removeItem(scoped);
    } catch (e) {
      // fallback to memory storage if localStorage is not available
      console.warn("localStorage not available, using memory storage", e);
      delete memoryStorage[scoped];
    }
  }

  public async removeItems(keys: string[]): Promise<void> {
    await Promise.all(keys.map(key => this.removeItem(key)));
  }
}
