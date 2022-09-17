import { faker } from "@faker-js/faker";

export async function createUser() {
  const password = faker.random.word();

  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: password,
    confirm_password: password,
  };
}

export async function sendUser(user:any) {
    const { email , password } = user
    return { email , password }
}