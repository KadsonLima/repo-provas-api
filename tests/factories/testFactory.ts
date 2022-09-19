import { faker } from "@faker-js/faker"

const createNewTest = () => {
	return {
		name: faker.name.firstName(),
		pdfUrl: faker.internet.url(),
		categoryId: 1,
		teacherId: 1,
		disciplineId: 2,
	}
}

export { createNewTest }