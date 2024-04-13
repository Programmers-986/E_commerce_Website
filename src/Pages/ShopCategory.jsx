import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png' ;
import Item from '../components/Items/Item'


const ShopCategory = (props) => {
const {all_product} = useContext(ShopContext);
return (
  <div className='shop-category'>
    <br/>
      <div className="shopcategory-indexSort">
        
        {/*<div className="shopcategory-sort">
          Sort by <img src = {dropdown_icon} alt = ""/>

</div>*/}
      </div>

      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          }
          else{
            return null;
          }

        
        })}
      </div>
      {/*<div className="shopcategory-loadmore">
        Explore more
      </div>*/}
     </div>


)

}
export default ShopCategory;
