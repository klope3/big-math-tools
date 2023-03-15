import { NumberComparison } from "./types/MathTypes";

export function compareStringNumbers(a: string, b: string): NumberComparison {
  if (a.length > b.length) return greaterThanResult(a, b);
  if (a.length < b.length) return lessThanResult(a, b);

  for (let i = 0; i < a.length; i++) {
    if (+a[i] > +b[i]) return greaterThanResult(a, b);
    if (+a[i] < +b[i]) return lessThanResult(a, b);
  }

  return equalResult();
}

function greaterThanResult(a: string, b: string): NumberComparison {
  return {
    greaterNumber: a,
    lesserNumber: b,
    areEqual: false,
    isGreaterThan: true,
    isLessThan: false,
  };
}

function lessThanResult(a: string, b: string): NumberComparison {
  return {
    greaterNumber: b,
    lesserNumber: a,
    areEqual: false,
    isGreaterThan: false,
    isLessThan: true,
  };
}

function equalResult() {
  return {
    greaterNumber: undefined,
    lesserNumber: undefined,
    areEqual: true,
    isGreaterThan: false,
    isLessThan: false,
  };
}
