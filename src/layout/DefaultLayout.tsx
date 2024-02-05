import { Outlet } from 'react-router-dom'
import { AreaCard } from '../components/AreaCard/AreaCard'
import { DefaultLayoutContent } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContent>
      <AreaCard />
      <Outlet />
    </DefaultLayoutContent>
  )
}
