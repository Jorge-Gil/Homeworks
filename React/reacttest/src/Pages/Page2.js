import React from 'react'
import NavComponent from '../NavComponent'
import { Memorize } from '../Memorize'
import { MemoHook } from '../MemoHook'
import { Father } from '../Father'
import { TodoApp } from '../TodoApp'
import GiftExpertApp from "../GiftExpertApp";


function Page2() {
  return (
    <>
    <NavComponent />
    <Memorize />
    <MemoHook />
    <Father />
    <TodoApp />
    <GiftExpertApp />
    </>
  )
}

export default Page2