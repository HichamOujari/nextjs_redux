import Head from 'next/head'
import {useSelector, useDispatch} from "react-redux"

export default function Home() {
  const count = useSelector((state)=>state.count)
  const by = useSelector((state)=>state.updateBy)
  const dispatch = useDispatch()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <button variant="contained" color="primary" onClick={()=>{
          dispatch({
            type:"+",
            by:document.getElementById("by").value
          })
        }}>+</button>
        <p onClick={()=>{
          dispatch({
            type:"RESET",
            by:document.getElementById("by").value
          })
        }}>{count} By {by}</p>
        <button variant="contained" color="secondary" onClick={()=>{
          dispatch({
            type:"-",
            by:document.getElementById("by").value
          })
        }} >-</button>
        <br/>
        <input type="text" id="by" />
      </main>
    </div>
  )
}
