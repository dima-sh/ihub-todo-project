let state = {};
let listeners = [];

function notify() {
  listeners.forEach((fn) => fn(state))
}

export function addListener(fn) {
  listeners.push(fn)
}
