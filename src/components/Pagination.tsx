import clsx from 'clsx'

type PaginationProps = {
  previous: boolean
  next: boolean
  handlePrevious: () => void
  handleNext: () => void
}

/**
 * Renders a pagination component with previous and next buttons.
 * @param {PaginationProps} props - The component props.
 * @param {boolean} props.previous - Indicates if the previous button should be enabled.
 * @param {boolean} props.next - Indicates if the next button should be enabled.
 * @param {() => void} props.handlePrevious - The function to handle the previous button click event.
 * @param {() => void} props.handleNext - The function to handle the next button click event.
 * @returns The pagination component.
 */
export default function Pagination({
  previous,
  next,
  handlePrevious,
  handleNext,
}: PaginationProps) {
  return (
    <div className="flex gap-2">
      <PaginationButton onClick={handlePrevious} disabled={!previous}>
        Previous
      </PaginationButton>
      <PaginationButton onClick={handleNext} disabled={!next}>
        Next
      </PaginationButton>
    </div>
  )
}

type PaginationButtonProps = {
  children: React.ReactNode
  disabled: boolean
  onClick: () => void
}

/**
 * Renders a pagination button.
 * @param {PaginationButtonProps} props - The component props.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {boolean} props.disabled - Determines if the button is disabled.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @returns The rendered pagination button.
 */
const PaginationButton = ({
  children,
  disabled,
  onClick,
}: PaginationButtonProps) => {
  return (
    <button
      className={clsx('bg-theme-1 text-theme-3', { 'opacity-50': disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
