import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../store/slices/filmsSlice'

import style from './Dropdown.module.css'

export default function Dropdown() {
  const { search } = useSelector((state) => state.films)
  const dispatch = useDispatch()
  const container = useRef()
  const [dropdownStateWithInput, setdropdownStateWithInput] = useState({ open: false })
  const [dropdownStateWithNoInput, setdropdownStateWithNoInput] = useState({ open: false })

  const handleDropdownInput = (e) => {
    dispatch(setSearch(e.target.value))
    setdropdownStateWithInput({ open: true })
  }
  const handleDropdownClick = (e) => {
    if (e.target === 'mousedown') {
      setdropdownStateWithNoInput({ open: true })
    }
  }

  //   const searchHandler = (e) => {
  //     if (search === '') {
  //       handleDropdownClick(e)
  //     } else {
  //       handleDropdownInput(e)
  //     }
  //   }

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
    // if (search === '') {
      setdropdownStateWithInput({ open: false })
      setdropdownStateWithNoInput({ open: false })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [search])

  return (
    <div className={`${style.container} flex-1`} ref={container}>

      <input
        type="text"
        className="w-full text-neutral-300 focus-within:text-white rounded-full focus-visible:outline outline-2 outline-neutral-500 py-2 px-4 bg-neutral-700"
        value={search}
        onChange={(e) => handleDropdownInput(e)}
      />
      {dropdownStateWithInput.open && (
      <div className={style.dropdown}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
      )}

      {dropdownStateWithNoInput.open && (
      <div className={style.dropdown}>
        <ul>
          <li>12</li>
          <li>23</li>
          <li>34</li>
          <li>56</li>
        </ul>
      </div>
      )}
    </div>
  )
}
