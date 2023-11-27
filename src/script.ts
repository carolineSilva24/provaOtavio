import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 
     const usuario1 = await prisma.usuario.create({
         data: {
             nome: "Caroline",
             email: "carolcarol@gmail.com"
         }
     })
     const leilao1 = await prisma.leilao.create({
         data: {
             idleilao: "1",
             idProduto: "1",
            lanceid: "1",
             preco: 50.2,
             donoid: "Caroline"
         }
     })

     const lance1 = await prisma.lance.create({
         data: {
             idlance: "1",
             compradorid: "Caroline",
             leilaoid: "1",
             valor: 50.2
         }
     })
  const usuario2 = await prisma.usuario.create({
    data: {
        nome: 'otavio fulano',
        email: 'fulano@gmail.com'
    }
  })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })