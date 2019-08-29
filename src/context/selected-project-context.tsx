import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react'

interface ProjectsInterface {
  name: string
  projectId: string
  userId: string
  docId: string
  activeValue: string
  // selectedProject: string
}
export interface StateInterface {
  projects: ProjectsInterface[]
}

const initialState: StateInterface = {
  projects: [],
}
interface ChildrenInterface {
  children?: ReactNode
  //   value?: any
}

export const SelectedProjectContext = createContext<StateInterface | any>(
  initialState
)
export const SelectedProjectProvider: FC<ChildrenInterface> = ({
  children,
}) => {
  const [selectedProject, setSelectedProject] = useState('INBOX')

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  )
}

export const useSelectedProjectValue = () => useContext(SelectedProjectContext)
