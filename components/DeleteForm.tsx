'use client'
import {deleteTask} from '@/utils/actions';
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending} = useFormStatus();
  return (
    <button className='btn btn-error btn-xs' disabled={pending}>
      {pending ? 'pending...' : 'Delete'}
    </button>
  )
}


const DeleteForm = (id: any) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name='id' value={id.id} />
      <SubmitBtn />
    </form>
  )
}

export default DeleteForm