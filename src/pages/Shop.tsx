import Card from "../component/Card"
import ShopCategory from "../component/ShopCategory"
import Products from "../../public/Products"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


const Shop = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center mb-5 px-5 min-md:px-24 min-md:mb-10">
      <div className="container mt-20">
      <div className="justify-center flex">
        <ShopCategory 
            categories={["All", "Shirt", "Pants", "Jacket"]}
            />
      </div>
      
      <div className="grid grid-cols-2 min-md:grid-cols-2 md:ml-7 lg:grid-cols-4 gap-5 mt-6">
            {Products.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Shop;