import { takeLatest as _takeLatest } from "redux-saga/effects";
import { ActionMatchingPattern, ActionPattern } from "@redux-saga/types";
import { Effects } from "core/types";

export function takeLatest<TAction extends ActionPattern>(
  action: TAction
): (
  target: Object,
  propertyKey: PropertyKey,
  descriptor: TypedPropertyDescriptor<
    (action: ActionMatchingPattern<TAction>) => any
  >
) => void {
  return function decorate(target, propertyKey) {
    const effect = (ctx) => {
      return _takeLatest(action, target[propertyKey].bind(ctx));
    };

    if (Reflect.has(target.constructor, Effects)) {
      const effects = Reflect.get(target.constructor, Effects);

      Reflect.set(target.constructor, Effects, effects.concat(effect));
    }

    Reflect.set(target.constructor, Effects, [effect]);
  };
}
