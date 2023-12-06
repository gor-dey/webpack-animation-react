import { RootStoreProvider, rootStore } from '@/shared/store'
import { Layout } from './layout'
import { MainPage } from '@/pages'

export default function App() {
  return (
    <RootStoreProvider rootStore={rootStore}>
      <Layout>
        <MainPage />
      </Layout>
    </RootStoreProvider>
  )
}
