// add to cart 
export const ADD =(product)=>{
        return{
                type:'ADDCART',
                payload: product,
        }
                
        
}

//remove to cart
export const REMOVE =(product)=>{
        return{
                type:"REMOVECART",
                payload:product,

        }
}