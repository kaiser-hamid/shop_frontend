import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      cartIsOpen: false,
      
      cartItems: [],//{slug: string, image: string, name: string, quantity: number, unit_price: number, stock: number}
      totalPrice: 0,
      previousTotalPrice: 0,
      totalItems: 0,

      setCartIsOpen: (payload) => set({ cartIsOpen: payload }),
      
      setCartItems: (payload) => {
        const cartItems = get().cartItems;
        const { slug, image, name, quantity, unit_price, available_stock } = payload;

        const existingItemIndex = cartItems.findIndex((item) => item.slug === slug);
        const existingItem = existingItemIndex === -1 ? null : cartItems[existingItemIndex];

        //check quantity exceed the available stock
        let quantityInCart = existingItem?.quantity || 0;
        quantityInCart += quantity;
        const availableStock = existingItem?.available_stock || 0;

        if(existingItem && quantityInCart > availableStock){
          console.log('quantity exceed the available stock', quantityInCart, availableStock);
          //TODO: Show a modal to the user that the quantity is not available
          return;
        }
        console.log('add item to the cart');
        //=========================================

        if (existingItem) {
          //update the quantity of the existing item
          set((state) => {
            const newCartItems = [ ...state.cartItems ];
            const i = newCartItems.findIndex((item) => item.slug === slug);
            
            if(i === -1){
              return { cartItems: newCartItems };
            }

            const targetItem = newCartItems[i];
            targetItem.quantity += quantity;

            newCartItems[i] = targetItem;

            const totalCartItems = newCartItems.length;
            const totalCartPrice = newCartItems.reduce((acc, item) => acc + item.quantity * item.unit_price, 0);
            
            return { 
              cartItems: newCartItems, 
              previousTotalPrice: state.totalPrice,
              totalPrice: totalCartPrice, 
              totalItems: totalCartItems 
            };
          });
            
        } else {
          //add new item to the cart
            set((state) => {
                const newCartItems = [ ...state.cartItems ];
                newCartItems.push({ slug, image, name, quantity, unit_price, available_stock });

                const totalCartItems = newCartItems.length;
                const totalCartPrice = newCartItems.reduce((acc, item) => acc + item.quantity * item.unit_price, 0);

                return { 
                  cartItems: newCartItems, 
                  previousTotalPrice: state.totalPrice,
                  totalPrice: totalCartPrice, 
                  totalItems: totalCartItems 
                };
            });
        }
      },

      setItemQuantitySpinner: (payload) => {
        const { slug, quantity, operation } = payload;

        set((state) => {
            const newCartItems = [ ...state.cartItems ];
            const targetItemIndex = newCartItems.findIndex((item) => item.slug === slug);

            if(targetItemIndex === -1){
              return { cartItems: newCartItems };
            }

            const targetItem = newCartItems[targetItemIndex];

            if (operation === 'inc') {
              targetItem.quantity += targetItem.available_stock > targetItem.quantity ? quantity : 0;
            } else if (operation === 'dec') {
                targetItem.quantity -= targetItem.quantity > 1 ? quantity : 0;
            }

            newCartItems[targetItemIndex] = targetItem;

            const totalCartItems = newCartItems.length;
            const totalCartPrice = newCartItems.reduce((acc, item) => acc + item.quantity * item.unit_price, 0);

            return { 
              cartItems: newCartItems, 
              previousTotalPrice: state.totalPrice,
              totalPrice: totalCartPrice, 
              totalItems: totalCartItems 
            };
        });
        
      },

      setRemoveItemFromCart: (payload) => {
        const { slug } = payload;

        set((state) => {
          const restCartItems = state.cartItems.filter((item) => item.slug !== slug);

          const totalCartItems = restCartItems.length;
          const totalCartPrice = restCartItems.reduce((acc, item) => acc + item.quantity * item.unit_price, 0);

          return { 
            cartItems: restCartItems, 
            previousTotalPrice: state.totalPrice,
            totalPrice: totalCartPrice, 
            totalItems: totalCartItems 
          };
        });
      },

      setClearCart: () => {
        set({ cartItems: [], totalPrice: 0, previousTotalPrice: 0, totalItems: 0 });
      }
    }),
    {
      name: 'cart-storage',
      }
    )
)

export default useCartStore