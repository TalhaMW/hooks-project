import React from 'react';
import "./app.css"
import Header from "./components/headerComponent/Header.jsx"
import AccordionPage from './Pages/accordionPage/AccordionPage.jsx';
import SearchArticlesPage from './Pages/SearchArticlesPage/SearchArticlesPage';
import DropDownPage from './Pages/dropDownPage/DropDownPage';
import LanguageTranslatePage from './Pages/languageTranslatePage/LanguageTranslatePage';
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
     <Header/>
     <Switch>
     <Route exact path="/" component={AccordionPage}/>
     <Route exact path="/search-article" component={SearchArticlesPage}/>
     <Route exact path="/drop-down" component={DropDownPage}/>
     <Route exact path="/language-translate" component={LanguageTranslatePage}/>
     </Switch>
    </div>
  )
}

export default App;
