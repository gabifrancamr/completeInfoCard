import { Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import { CompletedOrder } from './pages/completedForm'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Form />} />
        <Route path="/completed" element={<CompletedOrder />} />
      </Route>
    </Routes>
  )
}
