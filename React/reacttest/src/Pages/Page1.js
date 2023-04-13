import React from 'react'
import NavComponent from '../NavComponent'
import FirstApp from '../FirstApp'
import { MultipleCustomHooks } from '../MultipleCustomHooks'
import { FocusScreen } from '../FocusScreen'
import { Registro } from '../Registro'
import { Login } from '../Login'
import { Upload } from '../Upload'
import { Crud } from '../Crud'

function Page1() {
  return (
    <>
    <NavComponent />
    <FirstApp value={0} />
    <MultipleCustomHooks />
    <FocusScreen />
    <Registro />
    <Login />
    <Upload />
    <Crud />
    </>
  )
}

export default Page1