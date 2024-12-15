class Counter {
  private static instance: Counter;
  private count: number = 0;

  private constructor() {}

  static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    this.count -= 1;
  }

  getCount(): number {
    return this.count;
  }
}

export default Counter;
