import React, { FC, useState } from 'react'

import { useProjectsValue, useSelectedProjectValue } from '../context'
import { IndividualProject } from './IndividualProject'

interface ProjectsInterface {
  name: string
  projectId: string
  userId: string
  docId: string
  activeValue: string
}
export const Projects: FC<ProjectsInterface> = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue)
  const { setSelectedProject } = useSelectedProjectValue()
  const { projects } = useProjectsValue()

  return (
    projects &&
    projects.map((project: ProjectsInterface) => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}
          onKeyDown={() => {
            setActive(project.projectId)
            setSelectedProject(project.projectId)
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  )
}
