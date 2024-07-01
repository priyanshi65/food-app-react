import { useRouteError } from "react-router-dom"

export const Error =  () => {
  const errorMessage = useRouteError()
  console.log(errorMessage)
  return (
    <>
      <h3> Something went wrong </h3>
      <h4>{`${errorMessage.status} ${errorMessage.statusText}`}</h4>
    </>
  )
}