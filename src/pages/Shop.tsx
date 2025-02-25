import Card from "../component/Card"
import ShopCategory from "../component/ShopCategory"
import Products from "../../public/Products"


const Shop = () => {
  return (
    <>
    <div className="container">
    <ShopCategory 
        categories={["All", "T-Shirt", "Shirt", "Pants", "Jacket"]}
        />
    
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-6">
          {Products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
    </div>

    </>
  )
}

export default Shop;