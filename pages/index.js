import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Price from "../components/price";


const Index = (props)=>{
    // console.log(props.bpi.bpi)

    return(
 
        <Layout>

             <div>
            
                <h1>Welcome to BitPrice</h1>
                <p>Check current Bitcoin rate   </p>
               <Price bpi={props.bpi.bpi} />             
               
            </div>
        </Layout>
           
    );

}


Index.getInitialProps = async function(){
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();
    return ({
        bpi: data
    });

}




export default Index;