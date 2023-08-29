export abstract class CustomError extends Error {
  // a subclass MUST implement
  abstract statusCode: number;

  // needed to extend a built in class
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  // a customError must have abstract method that returns and array of objects
  //that contains a message that is a string and optionally a field that is a string.
  abstract serializeErrors(): { message: string; field?: string }[];
}
