import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { setSearch } from '../../store/slices/filmsSlice'
import { useDebounce } from '../coustomHooks/useDebounse'

import style from './Dropdown.module.css'

export default function Dropdown() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { search } = useSelector((state) => state.films)
  const dispatch = useDispatch()
  const container = useRef()
  const [dropdownStateWithInput, setdropdownStateWithInput] = useState({ open: false })
  const [dropdownStateWithNoInput, setdropdownStateWithNoInput] = useState({ open: false })
  const [input, setInput] = useState(() => searchParams.get('q') ?? '')
  const debounceValue = useDebounce(input, 350)

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input])

  useEffect(() => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      search: input,
    })
  }, [input])

  const handleDropdownInput = (e) => {
    dispatch(setSearch(e.target.value))
    setdropdownStateWithInput({ open: true })
    setInput(e.target.value)
  }

  const handleDropdownClick = (e) => {
    if (e.target.value === '') {
      setdropdownStateWithNoInput({ open: true })
    // } else if (dropdownStateWithNoInput.open === 'true' && e.target.value !== '') {
    //   handleDropdownInput(e)
    } else {
      handleDropdownInput(e)
    }
  }
  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setdropdownStateWithInput({ open: false })
      setdropdownStateWithNoInput({ open: false })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [search])

  useEffect(() => {
    dispatch(setSearch((debounceValue)))
  }, [debounceValue])

  useEffect(() => {
    setSearchParams({ q: input })
  }, [input])

  return (
    <div className=" flex-1" ref={container}>

      <input
        type="text"
        className="w-full text-neutral-300 focus-within:text-white rounded-full focus-visible:outline outline-2 outline-neutral-500 py-2 px-4 bg-neutral-700"
        value={search}
        onChange={(e) => handleDropdownInput(e)}
        onClick={(e) => handleDropdownClick(e)}
      />
      {dropdownStateWithInput.open && (
      //   <div className="absolute z-40 w-100 bg-white top-5% left-30 right-30 w-3/6">
      <div className={style.container}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
      )}

      {dropdownStateWithNoInput.open && (
      <div className={style.container}>
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
