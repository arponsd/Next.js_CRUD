import db from '@/utils/db';

export const GET = async (request: any) => {
  const tasks = await db.task.findMany();
  return Response.json({data: tasks});
}

export const POST = async (request: any) => {
  const data = await request.json();
  const tasks = await db.task.create({
    data:{
        content : data.content
    }
  });
  return Response.json({data: tasks});

}

