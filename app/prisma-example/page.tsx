import React from 'react'
import prisma from '@/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'wake-up',
    }
  });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  return allTasks;
}

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  return (
    <div className="">
      <div className='text-7xl'>PrismaExample</div>
      {tasks.map((t: any) => {
        return (
          <h2 key={t.id} className='text-xl py-2' >{t.content}</h2>
        )
      })}
    </div>
  )
}

export default PrismaExample