import { useState } from 'react'
import { nanoid } from 'nanoid'
import { data } from './data'

const App = () => {
	const [count, setCount] = useState(1)
	const [lorem, setLorem] = useState([])
	const handleForm = e => {
		e.preventDefault()
		let numCount = parseInt(count)
		setLorem(data.slice(0, numCount))
	}

	return (
		<>
			<form className='form' onSubmit={handleForm}>
				<label htmlFor='name' className='label'>
					Generate lorem ipsum:
				</label>
				<input
					type='number'
					className='input'
					id='name'
					name='name'
					min='1'
					setp='1'
					max='5'
					value={count}
					onChange={e => setCount(e.target.value)}
				/>

				<button className='btn' type='submit'>
					Generate
				</button>
			</form>
			{lorem.map(({ text }) => {
				return (
					<p className='lorem' key={nanoid()}>
						{text}
					</p>
				)
			})}
		</>
	)
}
export default App
