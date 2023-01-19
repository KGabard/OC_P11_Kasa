import PageLayout from './pages/PageLayout'
import Router from './router/Router'

function App() {
  return (
    <PageLayout>
      <div className="page-body">
        <Router />
      </div>
    </PageLayout>
  )
}

export default App
