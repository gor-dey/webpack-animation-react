import { RootStoreProvider, rootStore } from '@/shared/store'
import { Layout } from './layout'
import { DesktopPage, MobilePage } from '@/pages'
import { useMediaQuery } from 'react-responsive'

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <RootStoreProvider rootStore={rootStore}>
      <Layout>{isMobile ? <MobilePage /> : <DesktopPage />}</Layout>
    </RootStoreProvider>
  )
}
