import Header from './components/Header'
import Entry from './components/Entry' 
import Data from './data'
import './App.css'


function App (){

  const entryElements = Data.map(entry => {
    return(
      <Entry
        key = {entry.id}
        entry = {entry}  //  <- Pass object as props
        // {...entry}          // <- Pass object as props (spread operator) 
        //for ABOVE TO WORK remove all the ~.entry.~ from Entry.jsx

    //     img = {entry.img}
    // //ABOVE IS CALLED FORESHADOWING
    //     // img = {{
    //     //   src : entry.img.src,
    //     //   alt : entry.img.alt
    //     // }}
    //     title = {entry.title}
    //     country = {entry.country}
    //     googleMapsLink = {entry.googleMapsLink}
    //     dates = {entry.dates}
    //     text = {entry.text}
      />
    )
  })

  return(
    <div>
      <Header />
      <main className='container'>
        {entryElements}   

      </main>
    </div>
  )
}

export default App;