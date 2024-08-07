const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function apiPost(Data) {
  try {
    const newRecord = await prisma.user.create({
      data: {
        name: Data.name,
        password: Data.password
      },
    });

    console.log('Новая запись успешно создана:', newRecord);

  } catch (error) {
    console.error('Ошибка при создании новой записи:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// const ddata = {
//   name: 'pavel',
//   password: '12345'
// };


export default  apiPost