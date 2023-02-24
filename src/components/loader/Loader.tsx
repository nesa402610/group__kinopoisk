import React from 'react'
import s from './loader.module.css'

export function Loader() {
  return (
    <div className="flex justify-center items-center w-full m-9"><span className={s.loader} /></div>
  )
}
