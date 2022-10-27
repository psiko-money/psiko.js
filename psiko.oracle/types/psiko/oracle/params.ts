/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Denom } from "./denom";

export const protobufPackage = "psiko.oracle";

/** Params defines the parameters for the module. */
export interface Params {
  VotePeriod: number;
  VoteThreshold: string;
  RewardBand: string;
  RewardDistributionWindow: number;
  Whitelist: Denom[];
  SlashFraction: string;
  SlashWindow: number;
  MinValidPerWindow: string;
}

function createBaseParams(): Params {
  return {
    VotePeriod: 0,
    VoteThreshold: "",
    RewardBand: "",
    RewardDistributionWindow: 0,
    Whitelist: [],
    SlashFraction: "",
    SlashWindow: 0,
    MinValidPerWindow: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.VotePeriod !== 0) {
      writer.uint32(8).uint64(message.VotePeriod);
    }
    if (message.VoteThreshold !== "") {
      writer.uint32(18).string(message.VoteThreshold);
    }
    if (message.RewardBand !== "") {
      writer.uint32(26).string(message.RewardBand);
    }
    if (message.RewardDistributionWindow !== 0) {
      writer.uint32(32).uint64(message.RewardDistributionWindow);
    }
    for (const v of message.Whitelist) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.SlashFraction !== "") {
      writer.uint32(50).string(message.SlashFraction);
    }
    if (message.SlashWindow !== 0) {
      writer.uint32(56).uint64(message.SlashWindow);
    }
    if (message.MinValidPerWindow !== "") {
      writer.uint32(66).string(message.MinValidPerWindow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.VotePeriod = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.VoteThreshold = reader.string();
          break;
        case 3:
          message.RewardBand = reader.string();
          break;
        case 4:
          message.RewardDistributionWindow = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.Whitelist.push(Denom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.SlashFraction = reader.string();
          break;
        case 7:
          message.SlashWindow = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.MinValidPerWindow = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      VotePeriod: isSet(object.VotePeriod) ? Number(object.VotePeriod) : 0,
      VoteThreshold: isSet(object.VoteThreshold) ? String(object.VoteThreshold) : "",
      RewardBand: isSet(object.RewardBand) ? String(object.RewardBand) : "",
      RewardDistributionWindow: isSet(object.RewardDistributionWindow) ? Number(object.RewardDistributionWindow) : 0,
      Whitelist: Array.isArray(object?.Whitelist) ? object.Whitelist.map((e: any) => Denom.fromJSON(e)) : [],
      SlashFraction: isSet(object.SlashFraction) ? String(object.SlashFraction) : "",
      SlashWindow: isSet(object.SlashWindow) ? Number(object.SlashWindow) : 0,
      MinValidPerWindow: isSet(object.MinValidPerWindow) ? String(object.MinValidPerWindow) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.VotePeriod !== undefined && (obj.VotePeriod = Math.round(message.VotePeriod));
    message.VoteThreshold !== undefined && (obj.VoteThreshold = message.VoteThreshold);
    message.RewardBand !== undefined && (obj.RewardBand = message.RewardBand);
    message.RewardDistributionWindow !== undefined
      && (obj.RewardDistributionWindow = Math.round(message.RewardDistributionWindow));
    if (message.Whitelist) {
      obj.Whitelist = message.Whitelist.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.Whitelist = [];
    }
    message.SlashFraction !== undefined && (obj.SlashFraction = message.SlashFraction);
    message.SlashWindow !== undefined && (obj.SlashWindow = Math.round(message.SlashWindow));
    message.MinValidPerWindow !== undefined && (obj.MinValidPerWindow = message.MinValidPerWindow);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.VotePeriod = object.VotePeriod ?? 0;
    message.VoteThreshold = object.VoteThreshold ?? "";
    message.RewardBand = object.RewardBand ?? "";
    message.RewardDistributionWindow = object.RewardDistributionWindow ?? 0;
    message.Whitelist = object.Whitelist?.map((e) => Denom.fromPartial(e)) || [];
    message.SlashFraction = object.SlashFraction ?? "";
    message.SlashWindow = object.SlashWindow ?? 0;
    message.MinValidPerWindow = object.MinValidPerWindow ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
