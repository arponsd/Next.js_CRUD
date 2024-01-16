'use client'
import { useFormStatus, useFormState} from 'react-dom'
import { createTaskCustom } from '../utils/actions'
import { useEffect } from 'react';
import toast from 'react-hot-toast';


const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit'
    className='btn btn-primary join-item'
    disabled={pending}
    >
      {pending ? 'Please wait...' : 'Create task'}
    </button>
  )
}

const initalState = {
  message: null
}

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initalState);
  useEffect(()=>{
    if(state.message === 'Failed') {
      toast.error('There was an error');
      return;
    }

    if(state.message === 'success') {
      toast.success('Task Created Successfully');
    }
  },[state])
  return (
    <form action={formAction}>
      {state.message? <p className='mb-2'>{state.message}</p> : null}
      <div className="join w-full">
        <input type="text"
        className='input input-bordered join-item w-full'
        placeholder='Type here...' name='content' required/>
        {/* <button type='submit' className='btn btn-primary join-item uppercase'>Create Task</button> */}
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskFormCustom