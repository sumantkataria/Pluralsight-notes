import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [output, setOutput] = useState([])
  useEffect(() => {
    async function jsonCall() {
      try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => resp.json())
        console.log(resp)
        setOutput(resp)
      } catch(error) {
        console.log(error)
      }
    }
    jsonCall()
  }, [])

  const ChildRender = ({id, userId, title, body}) => {
	
    return (
        <>
					<td style={{border: '1px solid'}}>{id}</td>
					<td style={{border: '1px solid'}}>{userId}</td>
					<td style={{border: '1px solid'}}>{title}</td>
					<td style={{border: '1px solid'}}>{body}</td>
        </>
    )
  }

  const handleSearch = (e) => {
    let filterValue = e.target.value;
    let tr = document.getElementsByTagName("tr")
    for(let i=1; i<tr.length; i++) {
      tr[i].style.display = "none"

      let td = tr[i].getElementsByTagName("td");
      for(let j=0; j<td.length; j++) {
        let cell = tr[i].getElementsByTagName("td")[j]
        if(cell) {
          if((cell.innerHTML).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
            tr[i].style.display = "";
            break;
          }
        }
      }
    }
  }

  return (
    <>
    <input placeholder="Search" onKeyUp={handleSearch}/>
    <table style={{borderCollapse: 'collapse'}}>
      <thead>
      <tr>
        <th style={{border: '1px solid'}}>ID</th>
        <th style={{border: '1px solid'}}>UserID</th>
        <th style={{border: '1px solid'}}>Title</th>
        <th style={{border: '1px solid'}}>Body</th>
      </tr>
      </thead>
      <tbody>
      {output.map((item, key) => {
        return <tr key={key}>{ChildRender({...item})}</tr>
      })}
      </tbody>
    </table>
    </>
  );
}

export default App;