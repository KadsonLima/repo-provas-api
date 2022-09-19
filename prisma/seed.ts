import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
const BCRYPT_SECRET = Number(process.env.BCRYPT_SECRET)
const prisma = new PrismaClient();

const main = async () => {
  const user = [
		{
			name: "kadson",
			email: "kadson@gmail.com",
			password: bcrypt.hashSync('kadson', BCRYPT_SECRET),
		},
	]
  const terms = [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
    {
      number: 5,
    },
    {
      number: 6,
    },
  ];
  const categories = [
    {
      name: "Projeto",
    },
    {
      name: "Prática",
    },
    {
      name: "Recuperação",
    },
  ];
  const teachers = [
    {
      name: "Diego Pinho",
    },
    {
      name: "Bruna Hamori",
    },
  ];
  const disciplines = [
    {
      name: "HTML e CSS",
      termId: 1,
    },
    {
      name: "JavaScript",
      termId: 2,
    },
    {
      name: "React",
      termId: 3,
    },
    {
      name: "Humildade",
      termId: 4,
    },
    {
      name: "Planejamento",
      termId: 5,
    },
    {
      name: "Autoconfiança",
      termId: 6,
    },
  ];
  const teachersDisciplines = [
    {
      teacherId: 1,
      disciplineId: 1,
    },
    {
      teacherId: 1,
      disciplineId: 2,
    },
    {
      teacherId: 1,
      disciplineId: 3,
    },
    {
      teacherId: 2,
      disciplineId: 4,
    },
    {
      teacherId: 2,
      disciplineId: 5,
    },
    {
      teacherId: 2,
      disciplineId: 6,
    },
  ];
  await prisma.user.createMany({ data: user })
  await prisma.terms.createMany({ data: terms });
  await prisma.categories.createMany({ data: categories });
  await prisma.teacher.createMany({ data: teachers });
  await prisma.disciplines.createMany({ data: disciplines });
  await prisma.teachersDisciplines.createMany({ data: teachersDisciplines });
};

main()
  .catch((err) => console.error(err))
  .finally(async () => prisma.$disconnect());
