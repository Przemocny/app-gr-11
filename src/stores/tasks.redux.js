import { createSlice } from '@reduxjs/toolkit'


// Część 0
// korzystając z @reduxjs/toolkit utwórz store do obsługi 
// zapytań asynchronicznych związanych z operacjami na koszyku zakupowym
// store ma emulować działanie koszyka w sklepie

// jak wygląda struktura danych Product
const Product = {
    'id':0,
    'name': "product 1",
    "price": 20, 
    "quantity": 1
}


// Część 1
// store powinien mieć 4 komórki pamięci powiązane z danymi z koszyka
// // // imBusy - obsługa zapytań asynchronicznych
// // // elementsCount - sumaryczna ilość elementów w koszyku (numer)
// // // elementsList - array z produktami w koszyku (array)
// // // elementsListIds - array z idkami produktów z koszyka (array)
// // // value - sumaryczna wartość wszystkich pozycji w koszyku (numer)


// Cześć 2
// store powinien mieć akcje powiązane z działaniem koszyka
// // // addProductToCart(product) - dodawanie elementów, oraz rekalkulacja danych koszyka
// // // removeProductFromCart(id) - usuwanie elementu z koszyka po id produktu, rekalkulacja danych koszyka
// // // showSummary() - prezentowanie podsumowania koszyka w postaci {elementsCount, value}
// // // checkoutCartInit() - rozpoczęście wysyłki koszyka do "API" sklepu
// // // checkoutCartDone(id) - odbiór id "zaksięgowanego koszyka" z API sklepu, czyszczenie koszyka


const {actions, reducer} = createSlice({
	name: 'cart',
	initialState: { },
	reducers: { }
})

export const {  } = actions

export default reducer
