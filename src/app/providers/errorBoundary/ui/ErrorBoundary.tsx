import { PageError } from 'pages/PageError'
import React, { type ReactNode, type ErrorInfo, Suspense } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    if (error) {
      return { hasError: true }
    } else {
      return { hasError: false }
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error, errorInfo)
  }

  render(): ReactNode {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <Suspense fallback={null}>
          <PageError />
        </Suspense>
      )
    }

    return children
  }
}
