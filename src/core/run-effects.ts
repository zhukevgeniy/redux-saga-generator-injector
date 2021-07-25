import { Effect } from "@redux-saga/types";

export function* runEffects(effects: Effect[]) {
  for (const effect of effects) {
    yield effect;
  }
}
