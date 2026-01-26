"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  analytics: () => analytics
});
module.exports = __toCommonJS(index_exports);

// src/analytics.ts
var import_openapi_fetch = __toESM(require("openapi-fetch"));

// src/sender.ts
var Sender = class {
  constructor(options) {
    this.batch = [];
    this.maxTimeoutMs = 3e4;
    this.timeoutId = null;
    this.isSending = false;
    this.batchSize = options.batchSize;
    this.baseTimeoutMs = options.baseTimeoutMs;
    this.currentTimeoutMs = options.baseTimeoutMs;
    this.sendFn = options.sendFn;
  }
  enqueue(item) {
    this.batch.push(item);
    this.schedule();
  }
  schedule() {
    if (this.batch.length > 0 && !this.timeoutId) {
      this.timeoutId = setTimeout(() => {
        this.timeoutId = null;
        this.flush();
      }, this.currentTimeoutMs);
    }
  }
  async flush() {
    if (this.isSending || this.batch.length === 0) {
      return;
    }
    this.isSending = true;
    const current = [...this.batch.slice(0, this.batchSize)];
    this.batch = this.batch.slice(this.batchSize);
    try {
      await this.sendFn(current);
      this.currentTimeoutMs = this.baseTimeoutMs;
    } catch (error) {
      console.error("Sender: Failed to send batch", error);
      this.batch = [...current, ...this.batch];
      this.currentTimeoutMs = Math.min(
        this.currentTimeoutMs * 2,
        this.maxTimeoutMs
      );
    } finally {
      this.isSending = false;
      this.schedule();
    }
  }
};
var sender_default = Sender;

// src/analytics.ts
var Analytics = class {
  constructor(baseUrl) {
    this.enabled = false;
    this.properties = {};
    const client2 = (0, import_openapi_fetch.default)({ baseUrl });
    const sendFn = async (batch) => {
      const res = await client2.POST("/v1/events", { body: batch });
      if (res.response.status !== 200) {
        throw new Error(res.error);
      }
    };
    this.sender = new sender_default({ batchSize: 100, baseTimeoutMs: 200, sendFn });
  }
  enable() {
    this.enabled = true;
  }
  setGlobalProperty(key, value) {
    this.properties[key] = value;
  }
  track(name, properties) {
    if (!this.enabled) {
      return;
    }
    const event = {
      name,
      ...this.properties,
      ...properties
    };
    this.sender.enqueue(event);
  }
};
var analytics_default = Analytics;

// src/index.ts
var endpoint;
var _a;
if (typeof process !== "undefined" && process.env) {
  endpoint = (_a = process.env.METAMASK_ANALYTICS_ENDPOINT) != null ? _a : process.env.NEXT_PUBLIC_METAMASK_ANALYTICS_ENDPOINT;
}
var METAMASK_ANALYTICS_ENDPOINT = endpoint != null ? endpoint : "https://mm-sdk-analytics.api.cx.metamask.io/";
var client = new analytics_default(METAMASK_ANALYTICS_ENDPOINT);
var analytics = client;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  analytics
});
