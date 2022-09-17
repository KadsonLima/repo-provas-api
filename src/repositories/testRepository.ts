import { prisma } from "../config/database";

export interface TestBody {
  name: string;
  pdfUrl: string;
  categoryId: number;
  teacherId: number;
  disciplineId: number;
}

export type SignInBody = Omit<TestBody, "name">;

async function createTest({
  name,
  pdfUrl,
  categoryId,
  teacherId,
  disciplineId,
}: TestBody) {
  const teacherDisciplineId = await findTeacherDiscipline(
    teacherId,
    disciplineId
  );

  return await prisma.tests.create({
    data: {
      name,
      pdfUrl,
      categoryId,
      teacherDisciplineId: teacherDisciplineId?.id,
    },
  });
}

async function findTeacherDiscipline(teacherId: number, disciplineId: number) {
  console.log("teste 2");

  const result = await prisma.teachersDisciplines.findFirst({
    where: { teacherId, disciplineId },
  });

  if (!result) throw { code: 404 };

  return result;
}

async function getTestsForTerms() {
  const result = await prisma.terms.findMany({
    orderBy: { number: "asc" },
    select: {
      id: true,
      number: true,
      Disciplines: {
        select: {
          id: true,
          TeacherDisciplines: {
            select: {
              disciplines: { select: { name: true } },
              teacher: { select: { name: true } },
            },
          },
        },
      },
    },
  });

  if (!result) throw { code: 404 };

  return result;
}

async function getTestsForTeacher() {
  const result = await prisma.teachersDisciplines.findMany({
		select: {
			id: true,
			teacher: { select: { name: true } },
			disciplines: { select: { name: true } },
			Tests: {
				select: {
					id: true,
					name: true,
					pdfUrl: true,
					category: { select: { id: true, name: true } },
				},
			},
		},
	})

  if (!result) throw { code: 404 };

  return result;
}

export { createTest, getTestsForTerms, getTestsForTeacher };
