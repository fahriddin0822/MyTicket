import { Users } from "../../models/users.model";

export const userStub = ():Partial<Users> => {
    return {
        id: 1,
        name: "user1",
        email: "user1@mail.com",
        password: "12345678",
        role_value: "ADMIN",
        is_active: true,
    };
};

