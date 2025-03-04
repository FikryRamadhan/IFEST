import { useCart } from "../hooks/cartContext"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Card from "../component/Card"
import ShopCategory from "../component/ShopCategory"
import Products from "../../public/Products"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


const Shop = () => {
  const { addToCart } = useCart();
   
  const handleAddToCart = (id, selectedIndex) => {
    const selectedProduct = Products.find((product) => product.id === id);
    if (selectedProduct) {
      addToCart({ ...selectedProduct, selectedIndex, quantity: 1, selected: true });
      toast.success("Product added to cart");
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-3 gap-1 md:grid-cols-3 mt-12 lg:mt-18 bg-black bg-fixed">
      <img src="/heroShop1.jpg" alt="Pose 1" className="col-span-2 row-span-2 object-cover" />
      <img src="/heroShop2.jpg" alt="Pose 2" className="col-span-1 row-span-1 object-cover" />
      <img src="/heroShop6.jpg" alt="Pose 3" className="col-span-1 row-span-2 object-cover" />
      <img src="/heroShop.jpg" alt="Pose 4" className="col-span-2 row-span-1 object-cover" />
      <img src="/heroShop5.jpg" alt="Pose 5" className="col-span-1 row-span-1 object-cover" />
      <img src="/heroShop3.jpg" alt="Pose 6" className="col-span-2 row-span-1 object-cover" />
    </div>
    <div className="flex justify-center mb-5 px-5 min-md:px-24 min-md:mb-10 mt-20">
      <div className="container">
      <div className="justify-center flex">
        <ShopCategory 
            categories={["All", "Shirt", "Pants", "Jacket"]}
            />
      </div>
      
      <div className="grid grid-cols-2 min-md:grid-cols-2 md:ml-7 lg:grid-cols-4 gap-5 mt-6">
            {Products.map((product) => (
              <Card key={product.id}
               {...product} 
               onAddToCart={handleAddToCart}/> 
            ))}
          </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Shop;