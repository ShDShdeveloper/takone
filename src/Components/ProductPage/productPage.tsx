import {useParams} from "react-router-dom";
import './ProductPage.css'
import {connect} from "react-redux";
import {getProducts} from "../../store/products";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function ProductPage({products, getProducts} : {products: any, getProducts: any}){
    const {id} : any = useParams()
    useEffect(()=>{
        getProducts()
    }, [])
    const {t} = useTranslation()
    const product = products.filter((item : any)=> typeof(id)!=="undefined" && item.id==id)
    console.log(product)
    return <div className={"productPage my-3 my-sm-0 mx-md-auto mx-3"}>
        <div className={"row p-3 position-relative"}>

            <div className="col-12 col-md-6 p-5 p-sm-0">
                <img className={"mainImage"} src={product[0]?.thumbnail} alt={product[0]?.title}/> <br/>
                <div className="row">
                    {
                        product[0]?.images.map((item : any, index : number)=>
                        <div className="col-12 col-sm-4 my-2">
                            <img className={"w-100 h-100"} key={index} src={item} alt=""/>
                        </div>)
                    }
                </div>
            </div>
            <div className="col-12 col-md-6 fst-italic">
                <div className="row">
                    <div className="col-12 col-lg-5 me-2">
                        <p className={"name"}>{t("title")}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={"info"}>{product[0]?.title}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 me-2">
                        <p className={"name"}>{t("brand")}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={"info"}>{product[0]?.brand}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 me-2">
                        <p className={"name"}>{t("description")}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={"info"}>{product[0]?.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 me-2">
                        <p className={"name"}>{t("price")}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={"info"}>$ {product[0]?.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-5 me-2">
                        <p className={"name"}>{t("rating")}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p className={"info"}>$ {product[0]?.rating}</p>
                    </div>
                </div>
                <div className={"text-center mt-0 mt-md-5"}>
                    <Link to={"/"}><button className={"btn-danger btn mx-1 my-1"}>{t("Cancel")}</button></Link>
                    <button className={"btn-success btn mx-1 my-1"}>{t("Shopping")}</button>
                </div>
            </div>

        </div>
       <Link to={"/"}> <h1 className={"close"}>x</h1></Link>
    </div>
}
export default connect(({products: {products}})=>({products}), {getProducts})(ProductPage)