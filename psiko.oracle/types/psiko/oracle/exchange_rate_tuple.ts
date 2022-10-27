/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "psiko.oracle";

export interface ExchangeRateTuple {
  Denom: string;
  ExchangeRate: string;
}

function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return { Denom: "", ExchangeRate: "" };
}

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Denom !== "") {
      writer.uint32(10).string(message.Denom);
    }
    if (message.ExchangeRate !== "") {
      writer.uint32(18).string(message.ExchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Denom = reader.string();
          break;
        case 2:
          message.ExchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    return {
      Denom: isSet(object.Denom) ? String(object.Denom) : "",
      ExchangeRate: isSet(object.ExchangeRate) ? String(object.ExchangeRate) : "",
    };
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.Denom !== undefined && (obj.Denom = message.Denom);
    message.ExchangeRate !== undefined && (obj.ExchangeRate = message.ExchangeRate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(object: I): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.Denom = object.Denom ?? "";
    message.ExchangeRate = object.ExchangeRate ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
