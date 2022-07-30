import React from 'react'

const Details = () => {
  return (
    <main className='index-container'>
      <div className='container'>
        <h1>Details</h1><br/>
        <table>
          <tr>
            <th colSpan={2}>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>

      </div>
    </main>
  )
}

export default Details
