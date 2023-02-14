import React from 'react'
// @ts-ignore
import s from './loader.module.css'

export function Loader() {
  return (
    <div className="flex justify-center items-center w-full"><span className={s.loader} /></div>
  )
}
