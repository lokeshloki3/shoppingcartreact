import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>
        <div className="flex justify-between border-b-2 m-4 pb-5 border-black max-w-[550px]">
            <div className="h-[180px] m-4">
                <img src={item.image} className="h-full w-full" />
            </div>
            <div  className="flex flex-col max-w-[300px] justify-evenly">
                <h1 className=" font-semibold">{item.title}</h1>
                <h1 className="text-[13px] text-grey-400 line-clamp-[2]">{item.description}</h1>
                <div className="flex justify-between">
                    <p className="text-green-600 font-bold">{item.price}</p>
                    <div 
                        className="pr-8"
                        onClick={removeFromCart}>
                        <FcDeleteDatabase/>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default CartItem