# Factory Pattern: Notification Service

## What is the Factory Pattern?

The Factory Pattern is a design pattern that helps create objects without having to specify 
exactly what type of object you need. Instead, a factory function chooses the 
right type of object based on the input you give.

This pattern is helpful when creating objects is tricky or depends on certain conditions that 
happen while the program is running.

---

## Example: Notification Service in TypeScript

In this example, a `Notification` factory dynamically creates different types of 
notifications (`email` and `push`). Each type of notification has two methods:
- `send`: Sends the notification immediately.
- `schedule`: Schedules the notification for a specific time.

---

## How It Works:
1. The `createNotification` function accepts a notification type (`email` or `push`).
2. It looks up the corresponding factory function in the `notificationCreators` map.
3. The factory function creates and returns the appropriate notification object.
4. Methods like `send` and `schedule` can then be called on the notification object.

---

## Benefits:
- **Centralized Object Creation**: The creation logic is encapsulated in the factory.
- **Flexibility**: Adding new notification types only requires a new factory function and an entry in the `notificationCreators` map.
- **Readability**: Using a lookup map simplifies the code and avoids repetitive `switch` or `if-else` statements.

---

## When to Use:
- When you want to encapsulate object creation logic for better maintainability and scalability.
- When adding new object types frequently requires minimal code changes.
