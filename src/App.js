 import Header from './components/Header';
 import './App.css';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import {useState} from 'react';
 function App(){

	const [product, setProduct] = useState([
		{
			url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FYSCROWD-Sneakers-Casual-Stylish-White%2Fdp%2FB0B2572RSD&psig=AOvVaw3A4a3HqnQfd7X_sO5Gl8nN&ust=1685439021544000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCPg-Sbmv8CFQAAAAAdAAAAABAE',
            name: 'White Shoe',
			category:'Shoes',
			seller:'Dev seller',
			price:'2000'
		},
		{
			url: 'https://www.amazon.in/Smart-Watch-Men-Bluetooth-Smartwatch/dp/B0BMFXNK66?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A27FPOKFYUJMP',
            name: 'Black watch',
			category:'watch',
			seller:'Dev seller',
			price:'200'
		},
		{
			url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FBeginners-ultimate-beginners-programming-easily%2Fdp%2F1689887990&psig=AOvVaw1OVB94s15O7Fd8Gr2wY3gr&ust=1685437974830000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDApfSXmv8CFQAAAAAdAAAAABAE',
            name: 'Book',
			category:'Book',
			seller:'Dev seller',
			price:'200'
		},
        ])

		const [cart, setCart]= useState([])
		const [showCart, setShowCart] = useState(false)

		const addToCart = (data) => {
        console.log(cart)
		setCart([...cart , {...data ,quantity:1}])
		}

		const handleShow=(value)=>{
			setShowCart(value)
		}
	return(
		<div>
			<Header count={cart.length} handleShow={handleShow}></Header>
			{
				showCart ?
				<CartList cart={cart}></CartList> :
				<ProductList product={product} addToCart={addToCart}></ProductList>
			}
			 
			 
		</div>
	);
}
 export default App;