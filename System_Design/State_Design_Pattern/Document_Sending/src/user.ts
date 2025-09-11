export class User {
  role: string;
  constructor(role: "admin" | "editor") {
    this.role = role;
  }
}
