import { CounterSchema } from 'entites/Counter';
import { UserSchema } from 'entites/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: LoginSchema;
}
