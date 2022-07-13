import searchIcon from '../../Images/searchIcon.png'
import './main.css'
import {useTranslation} from "react-i18next";
import {Dropdown} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getProducts} from "../../store/products";
import {Link} from "react-router-dom";
function Main({products, getProducts} : {products: any, getProducts: any}){
    useEffect(()=>{
        getProducts()
    }, [])
    const {t} = useTranslation()
    const product = products
    let categories = [
        "all",
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
    ];
    const [page, setPage] = useState(1)
    const [productName, setProductName] : [productName: any, setProductName: any] = useState("all")
    const filteredProducts = (product?.filter((item: any)=>item.category===productName))
    const [search, setSearch] = useState("")
    const searchProduct = (product.filter((item : any)=>item.title.toLowerCase().includes(search.toLowerCase())))
    useEffect(()=>{
        setSearch("")
        setPage(1)
    }, [productName])
    useEffect(()=>{
        setPage(1)
    }, [search])
    function counter(x: number){
                setPage(prev=>prev+x)
    }
    return <main>
        <div className={"row my-4"}>
            <div className={"col-12 col-sm-8 col-md-7 my-auto"}>
                <div className={"input-group text-center widthsearch w-100"}>
                    <div className={"form-outline widthInput"}>
                        <input value={search} onChange={(e)=>{setSearch(e.target.value); setProductName("all")}} type="search" placeholder={t("Search by product name")} id="form1" className="form-control"/>
                    </div>
                    <button type="button" className={"btn bgViolet"}>
                        <i className={"fas fa-search"}> <img className={"iconSearch"} src={searchIcon} alt=""/> </i>
                    </button>
                </div>
            </div>
            <div className={"col-12 col-sm-4 col-md-5 text-center text-sm-end my-3 my-md-auto"}>
                <Dropdown>
                    <Dropdown.Toggle className={"productChoose bg-white"} variant="outline-light" id="dropdown-basic" size={"lg"}>
                        {t(productName)}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={"bgViolet"}>
                        {
                            categories.map((category, index)=>
                                <Dropdown.Item className={"textColor"} href="#" key={category} onClick={() => setProductName(category)}>{t(category)}</Dropdown.Item>)
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div>
            <div className={`d-flex flex-wrap my-5 ${search ? "justify-content-center": "justify-content-center justify-content-lg-between"}`}>
                {
                    (productName==="all" ? searchProduct.filter((item : any, index: number)=>index >= (page-1)*4 && index<page*4) : filteredProducts.filter((item : any, index: number)=>index >=(page-1)*4 && index<page*4)).map((item : any, index : any)=> <Link className={"cardStyle"} to={`/products/${item.id}`}>
                        <div key={index} className="card border-0">
                            <img className="card-img-top heightProductImg" src={item.thumbnail} alt="Card image cap"/>
                            <div className="card-body cardBody">
                                <h4 className={"fst-italic text-center title fw-bold"}>{item.title}</h4>
                                <p className={"italic text-center my-3"}>{item.description}</p>
                                <h4 className={"text-center title fw-bold fst-italic"}>$ {item.price}</h4>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            {
                ((productName==="all" &&searchProduct.length>4) ||(productName!=="all" && filteredProducts.length>4)) && <div className="justify-content-center d-flex">
                    <button onClick={()=>counter(-1)} className={`btn productChoose bg-white me-1 me-sm-4 ${page===1 && "disabled"}`}>{"<<"} {t("previous")}</button>
                    <h3 className={"px-2 my-auto fw-bold"}>{page}</h3>
                    <button onClick={()=>counter(1)} className={`btn productChoose bg-white ms-1 ms-sm-4 ${productName==="all" ? (Math.ceil(searchProduct.length/4)===page && "disabled"): (Math.ceil(filteredProducts.length/4)===page ? "disabled" : "")}`}>{t("next")} {">>"}</button>
                </div>
            }
        </div>

    </main>
}
export default connect(({products: {products}})=>({products}), {getProducts})(Main)