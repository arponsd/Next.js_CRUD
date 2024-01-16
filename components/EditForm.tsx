'use client'
import { editTask } from "@/utils/actions";

const EditForm =async (task: any) => {
  const id = task.task.id;
  const content = task.task.content;
  const completed = task.task.completed;
  return (
    <div>
      <form action={editTask} 
      className="max-w-sm p-12 border border-base-300 rounded-lg">
        <input type="hidden" name='id' value={id} />
        {/* content */}
        <input type="text" required defaultValue={content} 
        name='content'
        className="input input-bordered w-full"
        />
        <div className="form-control">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">Completed</span>
            <input type="checkbox"
            defaultChecked={completed}
            id='completed'
            name='completed'
            className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-4">Update</button>
      </form>
    </div>
  )
}

export default EditForm
