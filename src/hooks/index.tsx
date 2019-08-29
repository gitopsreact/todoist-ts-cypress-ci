import React, { useEffect, useState } from 'react'

import { firebase } from '../firebase'
import { collatedTasksExists } from '../helpers'

const collatedTasks = () => {}

interface ProjectInterface {
  name: string
  projectid: string
  userid: string
}
export const useTasks = (selectedProject: string) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasts')
      .where('userId', '==', '3XueJHiEDvXqB9PLmuM6AkRZExD3')

    unsubscribe =
      selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectid', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
          ))
        : selectedProject === 'INBOX' || selectedProject === '0'
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe
  }, [selectedProject])
}
