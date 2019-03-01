export const EVENT_TYPES = {
  SHOW: "show",
  REMOVE: "remove"
};

export const eventManager = {
  callbacks: new Map(),

  on(type, callback) {
    if (!this.callbacks.has(type)) {
      this.callbacks.set(type, []);
    }

    this.callbacks.get(type).push(callback);
  },
  off(type) {
    this.callbacks.delete(type);
  },
  emit(type, ...args) {
    if (this.callbacks.has(type)) {
      this.callbacks.get(type).forEach(cb => cb(...args));
    }
  }
};
