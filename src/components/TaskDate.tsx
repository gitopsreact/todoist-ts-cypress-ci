import moment from 'moment'
import React, { FC } from 'react'
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa'

interface TaskInterface {
  setTaskDate: (arg0: string) => void
  showTaskDate: boolean | any
  setShowTaskDate: (arg0: boolean) => void
}

export const TaskDate: FC<TaskInterface> = ({
  setTaskDate,
  showTaskDate,
  setShowTaskDate,
}) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false)
              setTaskDate(moment().format('DD/MM/YYYY'))
            }}
            onKeyDown={() => {
              setShowTaskDate(false)
              setTaskDate(moment().format('DD/MM/YYYY'))
            }}
            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <FaSpaceShuttle />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false)
              setTaskDate(
                moment()
                  .add(1, 'day')
                  .format('DD/MM/YYYY')
              )
            }}
            onKeyDown={() => {
              setShowTaskDate(false)
              setTaskDate(
                moment()
                  .add(1, 'day')
                  .format('DD/MM/YYYY')
              )
            }}
            data-testid="task-date-tomorrow"
            role="button"
            tabIndex={0}
            aria-label="Select tomorrow as the task date"
          >
            <span>
              <FaSun />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowTaskDate(false)
              setTaskDate(
                moment()
                  .add(7, 'days')
                  .format('DD/MM/YYYY')
              )
            }}
            onKeyDown={() => {
              setShowTaskDate(false)
              setTaskDate(
                moment()
                  .add(7, 'days')
                  .format('DD/MM/YYYY')
              )
            }}
            data-testid="task-date-next-week"
            aria-label="Select next week as the task date"
            tabIndex={0}
            role="button"
          >
            <span>
              <FaRegPaperPlane />
            </span>
            <span>Next week</span>
          </div>
        </li>
      </ul>
    </div>
  )
