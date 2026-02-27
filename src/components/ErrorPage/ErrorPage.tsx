import { useRouteError } from 'react-router-dom'

interface RouteError {
  message: string
  statusText?: string
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>La ruta a la que estás intentando acceder no existe.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
