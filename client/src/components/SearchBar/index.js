
import {QUERY_PRODUCT_BY_NAME} from "../../utils/queries"
import { useQuery } from "@apollo/client";  

//Semantic UI Component
import { Search } from 'semantic-ui-react'
import { Button } from "bootstrap";


//Search Handler
function searchProduct(){

      const searchElement=document.querySelector('.searchbar input');
      console.log(searchElement.value);
     
      console.log("Search Element",searchElement);
      localStorage.setItem("search_value",JSON.stringify(searchElement.value));
      window.location.assign(`/products/${searchElement.value}`);
      

    }


const SearchBar=function(){
      const { loading, data }=useQuery(QUERY_PRODUCT_BY_NAME);

      const products = data?.getProductByName(this.value) || [];

     console.log(products);
    
     return (
     <div className="row justify-content-center align-items-center">
     <Search placeholder="Search Products" className="searchbar col-6"/> 
     <button className="searchBtn col-3" onClick={searchProduct}>Search</button>
     </div> 
     )

    


}


export default SearchBar;