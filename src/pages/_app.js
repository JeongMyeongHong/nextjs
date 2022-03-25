import AppLayout from "../components/AppLayout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout />
      <Component />
    </>
  )
}

export default MyApp
