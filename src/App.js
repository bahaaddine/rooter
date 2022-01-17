import './App.css';
import Add from './components/Add'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import NavBar from './components/NavBar'
import {Movies} from './components/Movies'
import {useState} from "react"
import {Switch , Route } from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Details'

function App() {
  const [movieList,setmovieList]=useState(Movies)
  const addHandler=(newMovie)=>{
    setmovieList([...movieList,newMovie])
  }
  const [search,setSearch]=useState("")
  return (
    <div className="App">
      <NavBar/>
      <Filter setSearch={setSearch} search={search} />
      <Add addHandler={addHandler}/>
      <Switch>
      <Route exact path="/" render={()=> <Home movieList={movieList} search={search}/> }></Route>
      <Route path="/Movie" render ={()=> <MovieList movieList={movieList} search={search}/>}></Route>
      <Route path="/details/:id" render ={(props)=> <Detail {...props} movieList={movieList} search={search}/>}></Route>
      </Switch>
    </div>
  );
}
export default App;
