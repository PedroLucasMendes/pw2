import { User } from "../../generated/prisma";

export type CreateUserDto = Pick<User, "name" | "email" | "password" | "userTypeId">;

export type UserDto = Omit<User, "password">;