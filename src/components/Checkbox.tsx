import React, { FC } from 'react'

import { firebase } from '../firebase'

interface TaskCheckboxInterface {
  id: string
  taskDesc: string
}

export const Checkbox: FC<TaskCheckboxInterface> = ({ id, taskDesc }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true,
      })
  }

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
      aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  )
}
