const { PrismaClient } = require('@prisma/client');



const prisma = new PrismaClient()

async function apiGet() {
  const allGender = await prisma.user.findMany()
  // console.log(allGender)
  await prisma.$disconnect();
  return allGender
}

// apiGet()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

  export default apiGet;