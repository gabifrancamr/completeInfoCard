import { Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import { CompletedOrder } from './pages/completedForm'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/completeInfoCard" element={<DefaultLayout />}>
        <Route path="/completeInfoCard" element={<Form />} />
        <Route
          path="/completeInfoCard/completed"
          element={<CompletedOrder />}
        />
      </Route>
    </Routes>
  )
}
