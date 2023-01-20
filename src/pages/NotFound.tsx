import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__subtitle">Oups ! La page que vous demandez n'existe pas.</p>
      <Link className="not-found__homepage-link" to={'/'}>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default NotFound