import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions'
import Link from 'next/link';

const singleTask = async (params: any) => {
    const task = await getTask(params.params.id);
  return (
    <>
      <div className="mb-16">
        <Link href='/tasks' className='btn btn-accent'>
            Back to tasks
        </Link>
        <EditForm task={task}/>
      </div>
    </>
  )
}

export default singleTask
