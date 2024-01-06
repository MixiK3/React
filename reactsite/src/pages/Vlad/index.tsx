import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IMyForm {
  name: string
  age: number
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: 'onBlur',
  })

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register('name', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 5,
              message: 'Нужно больше символов',
            },
          })}
        />
        <div>{errors.name?.message}</div>
        <input
          {...register('age', {
            required: 'Поле обязательно для заполнения',
            minLength: {
              value: 10,
              message: 'Нужно больше символов',
            },
          })}
        />
        <div>{errors.age?.message}</div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default App
