import { FC, FormEvent, useEffect, useState } from "react"
import s from './Search.module.scss'
import { searchclose } from "../../utils/img"
import { filterStore } from "../../store/filterStore"
import { useLocation } from "react-router-dom"

const Search:FC = () => {
  
  const { setSearchValue, setCurrentPage } = filterStore(state => state)
  const [text, setText] = useState('')
  const location = useLocation()
  
  const reset = () => {
    setText('')
    setSearchValue('')
  }
  
  const submit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchValue(text)
    setCurrentPage(1)
  }
  
  useEffect(() => {
    
    const params = new URLSearchParams(location.search)
    const value = params.get('search') || ''
    setText(value)
    
  }, [location.search])
  
  
  
  return (
    <>
      <form className={s.form} onSubmit={submit}>
        <div className={s.form__box}>
          <input 
            type="text" 
            className={s.form__box_input} 
            placeholder="Введите блюдо или состав"
            value={text}
            onChange={(event) => setText(event.target.value)}
            
          />
          {text && <img src={searchclose} alt="" className={s.form__box_icon} onClick={reset} /> }
          
        </div>
        <button className={s.form__btn}>Поиск</button>
      </form>
    </>
  )
}

export default Search