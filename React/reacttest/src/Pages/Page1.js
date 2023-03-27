import React from 'react'
import NavComponent from '../NavComponent'
import FirstApp from '../FirstApp'
import { MultipleCustomHooks } from '../MultipleCustomHooks'
import { FocusScreen } from '../FocusScreen'

function Page1() {
  return (
    <>
    <NavComponent />
    <FirstApp value={0} />
    <MultipleCustomHooks />
    <FocusScreen />
    </>
  )
}

export default Page1