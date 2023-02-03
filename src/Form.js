import {React,useState} from 'react'
import { useGlobalContext } from './context'


const Form = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
      
  

  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

 

  return (
    <main>
      <div class="cat"></div>
      <section className='quiz quiz-small'>
        <form className='setup-form'>

          <h2 class="animate-charcter">Quiz
          </h2>

          <div className='form-control'>
            <label htmlFor='category'>Subject</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value=' Animals'> Animals</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          

          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default Form