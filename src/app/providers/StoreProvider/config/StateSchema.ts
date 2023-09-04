import { CounterSchema } from "entites/Counter";
import { UserSchema } from "entites/User";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
