import Head from "next/head";
import NavBar from "./NavBar";


const Layout = (props)=>(

    <div>
        <Head>
            <title>BitPrize</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/materia/bootstrap.min.css" />
        </Head>
        <NavBar />
        <div className="container">
        {props.children}
        </div>
    </div>
);



export default Layout;