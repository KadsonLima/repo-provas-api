import { Tests } from "@prisma/client"

type TestData = Omit<Tests, "id" | "createdAt">

type TestBody = Omit<TestData, "teacherDiscipline" | "categoryId"> & {
	categoryId: string
	disciplineId: string
	teacherId: string
}

type GroupBy = "disciplines" | "teachers"

export { TestData, TestBody, GroupBy }
