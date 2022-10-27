import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRateVote } from "./types/psiko/oracle/tx";
import { MsgDelegateFeedConsent } from "./types/psiko/oracle/tx";
import { MsgAggregateExchangeRatePrevote } from "./types/psiko/oracle/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/psiko.oracle.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote],
    ["/psiko.oracle.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
    ["/psiko.oracle.MsgAggregateExchangeRatePrevote", MsgAggregateExchangeRatePrevote],
    
];

export { msgTypes }