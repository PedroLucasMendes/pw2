import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Limpa dados existentes
  await prisma.product.deleteMany()

  // Cria produtos de exemplo
  const products = await prisma.product.createMany({
    data: [
      {
        name: 'Notebook Dell',
        description: 'Notebook Dell Inspiron 15 com processador Intel i7',
        price: 3500.00,
        stock: 10,
        status: 1, // 1 = ativo
      },
      {
        name: 'Mouse Logitech',
        description: 'Mouse Logitech MX Master 3 sem fio',
        price: 450.00,
        stock: 25,
        status: 1,
      },
      {
        name: 'Teclado Mecânico',
        description: 'Teclado Mecânico RGB com switches azuis',
        price: 350.00,
        stock: 15,
        status: 1,
      },
      {
        name: 'Monitor Samsung',
        description: 'Monitor Samsung 27 polegadas Full HD',
        price: 1200.00,
        stock: 8,
        status: 1,
      },
      {
        name: 'Webcam Logitech',
        description: 'Webcam Logitech C920 Full HD',
        price: 350.00,
        stock: 0,
        status: 0, // 0 = inativo (sem estoque)
      },
    ],
  })

  console.log('✅ Banco populado com', products.count, 'produtos!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao popular banco:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })