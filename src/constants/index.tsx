interface CollatedTasksObjectInterface {
  key: string
  name: string
}

export const collatedTasks: CollatedTasksObjectInterface[] = [
  { key: 'INBOX', name: 'Inbox' },
  { key: 'INBOX', name: 'Today' },
  { key: 'NEXT_7', name: 'Next 7 Days' },
]
