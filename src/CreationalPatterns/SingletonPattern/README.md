# Singleton Pattern Example: Counter

## What is the Singleton Pattern?

The Singleton Pattern ensures a class has only one instance and provides a global access point to it.
This is especially useful for shared state or services.

---

## Example: Counter

In this example, a `Counter` class is implemented using the Singleton Pattern. 
It ensures that all parts of the app share the same counter instance.

---

## Code Overview:

### Counter.ts
- A private static field `instance` holds the single instance of the class.
- The constructor is private to prevent direct creation.
- A static method `getInstance()` ensures only one instance of the class is created.
- Methods include `increment()`, `decrement()`, and `getCount()` to manage the counter.

---

## How It Works:
1. The `Counter` class is accessed using `Counter.getInstance()`.
2. Calls to `increment()` or `decrement()` modify the shared counter state.
3. The same counter instance is shared across the application.

---

## Benefits:
- **Single Instance**: The counter state is shared globally.
- **Encapsulation**: The logic for managing the counter is encapsulated.

---

## When to Use:
- Managing small shared states like counters, configuration, or single-point services.
- Ensuring there is only one instance of a resource or service in an application.
