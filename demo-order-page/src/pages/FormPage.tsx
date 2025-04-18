import { useState } from "react"

function FormPage() {
 
  const [testData, setTestData] = useState([
    {
      name: 'Jolly',
      number: 431,
      locations: 'San Antonio, TX',
      id: 1
    },
    {
      name: 'Amber',
      number: 64,
      locations: 'Midland, TX',
      id: 2
    },
  ])

  const displayData = testData.map(item => <p key={item.id}>{item.name}</p>)
       

    return (
      <>        
        <h2 className="text-3xl font-bold underline">This is the form testing Page</h2>
        {displayData}
      </>
    )
}

export default FormPage
