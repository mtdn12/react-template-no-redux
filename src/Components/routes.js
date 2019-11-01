import Loadable from 'react-loadable'
import LoadingPage from 'Components/pages/LoadingPage'

const asyncHome = Loadable({
  loader: () => import('Components/pages/Home'),
  loading: LoadingPage,
})

const asyncProduct = Loadable({
  loader: () => import('Components/pages/Product'),
  loading: LoadingPage,
})

const asyncLogin = Loadable({
  loader: () => import('Components/pages/Login'),
  loading: LoadingPage,
})

export const Routes = {
  asyncHome,
  asyncProduct,
  asyncLogin,
}
