import { useEffect, useState } from 'react'
import { Antelope } from '../models'

const useFetchAntelopeData = () => {
  const [antelopeData, setAntelopeData] = useState<Antelope[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/antelopes')
      .then((response) => response.json())
      .then((data) => setAntelopeData(data))
      .catch((error) => {
        console.error('Error fetching data: ', error)
        setError('Failed to fetch antelope data.')
      })
  }, [])

  return { antelopeData, error }
}

export default useFetchAntelopeData
