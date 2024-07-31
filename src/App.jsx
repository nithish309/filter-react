import Search from "./Search"


const App = () => {
  const director=[
    {
      id:1,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXbOS_fOkcUtjObDRjk_qAooguir5HNuZXw&s",
      name:"Christopher nolan",
      movie:"Inception",
      follow:1000
    },
    {
      id:2,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUt1u58UFVsMSniu9sh4OiaRvv7wJgP2Ok_g&s",
      name:"Vetrimaran",
      movie:"Asuran",
      follow:999
    },
    {
      id:3,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtg6bcLIVN4sVbH7ydIL0OP3yOZGStByQLw&s",
      name:"Justin lin",
      movie:"Fast Five",
      follow:909
    },
    {
      id:4,
      image:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/78197_v9_ba.jpg",
      name:"Paul W. S. Anderson",
      movie:"Death Race",
      follow:899
    }
  ]
  return (
    <div>
      <Search dir={director}/>
    </div>
  )
}

export default App
