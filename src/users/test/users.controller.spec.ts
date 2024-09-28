// import { UsersController } from "../users.controller";
// import { UsersService } from "../users.service";
// import { Test } from "@nestjs/testing";
// import { JwtService } from "@nestjs/jwt";
// import { Users } from "../models/users.model";
// import { CreateUserDto } from "../dto/create-user.dto";
// import { userStub } from "./stubs/user.stub";

// jest.mock("../users.service");

// describe("Users controller", () => {
//     let usersController: UsersController;
//     let usersService: UsersService;

//     beforeAll(async () => {
//         const moduleRef = await Test.createTestingModule({
//             controllers: [UsersController],
//             providers: [UsersService, JwtService],
//         }).compile();

//         usersController = moduleRef.get<UsersController>(UsersController);
//         usersService = moduleRef.get<UsersService>(UsersService);
//     });

//     it("Users controller should be defined.", () => {
//         expect(usersController).toBeDefined();
//     });

//     it("Users controller should be defined.", () => {
//         expect(usersService).toBeDefined();
//     });

//     describe("create user", () => {
//         describe("when create user called", () => {
//             let user: Users;
//             let createUserDto: CreateUserDto;
//             beforeAll(async () => {
//                 createUserDto = {
//                     name: userStub().name,
//                     email: userStub().email,
//                     password: userStub().password,
//                     role_value: userStub().role_value,
//                 };
//                 user = await usersController.create(createUserDto);
//                 console.log(user);
//             });
//             it("than it should call userService", () => {
//                 expect(usersService.create).toHaveBeenCalledWith(createUserDto);
//             });
//             test("than it should return user", () => {
//                 expect(user).toEqual(userStub())
//             })
//         });
//     });
//     // describe("findAll users", () => {
//     //     describe("when findAll users is called", () => {
//     //         let users = Users[];
//     //             beforeAll(async () => {
//     //             users = await usersController.findAll()
//     //         })
//     //         it("then it should call", () => {
//     //             expect(usersService.findAll).toHaveBeenCalled();
//     //         })
//     //         it("then it should return users", () => {
//     //             expect(users).toHaveBeenCalled();
//     //         })
//     //     })
//     // })
// });
