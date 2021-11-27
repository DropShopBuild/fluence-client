/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.5.0-246
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v2';


// Services

// Functions
 

export function demoCalculation(
    config?: {ttl?: number}
): Promise<number>;

export function demoCalculation(
    peer: FluencePeer,
    config?: {ttl?: number}
): Promise<number>;

export function demoCalculation(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                           (call -relay- ("op" "noop") [])
                          )
                          (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("op" "noop") [])
                         )
                         (xor
                          (seq
                           (seq
                            (seq
                             (seq
                              (call "12D3KooWEez91nNsjh5upKXchFjgLnAtseg9US9NN8fLeNmo8Njy" ("calc" "add") [10])
                              (call "12D3KooWEez91nNsjh5upKXchFjgLnAtseg9US9NN8fLeNmo8Njy" ("calc" "multiply") [5])
                             )
                             (call "12D3KooWEez91nNsjh5upKXchFjgLnAtseg9US9NN8fLeNmo8Njy" ("calc" "subtract") [8])
                            )
                            (call "12D3KooWEez91nNsjh5upKXchFjgLnAtseg9US9NN8fLeNmo8Njy" ("calc" "divide") [6])
                           )
                           (call "12D3KooWEez91nNsjh5upKXchFjgLnAtseg9US9NN8fLeNmo8Njy" ("calc" "getResult") [] res)
                          )
                          (seq
                           (seq
                            (seq
                             (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("op" "noop") [])
                             (call -relay- ("op" "noop") [])
                            )
                            (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                           )
                           (call -relay- ("op" "noop") [])
                          )
                         )
                        )
                        (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("op" "noop") [])
                       )
                       (call -relay- ("op" "noop") [])
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "demoCalculation",
    "returnType" : {
        "tag" : "primitive"
    },
    "argDefs" : [
    ],
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}