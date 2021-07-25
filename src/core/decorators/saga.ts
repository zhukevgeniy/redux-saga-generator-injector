import { injectable } from "tsyringe";
import { Effects } from "core/types";
import { runEffects } from "core/run-effects";
import { Effect } from "@redux-saga/types";

interface SagaConstructor {
  new (...args: any[]): any;
}

type EffectWithCtx = (ctx: any) => Effect;

export function saga<TTarget extends SagaConstructor>() {
  return function decorate(target: TTarget) {
    let effects: EffectWithCtx[] = [];

    if (Reflect.has(target, Effects)) {
      effects = Reflect.get(target, Effects);
    }

    // FIXME: fix types
    class SagaRunner extends (target as any) {
      constructor(...props: ConstructorParameters<TTarget>) {
        super(...props);

        return runEffects(effects.map((effect) => effect(this)));
      }
    }

    injectable()(SagaRunner);

    return SagaRunner as TTarget;
  };
}
