import './scss/pages/cart.scss'

import { Table } from './table/Table'
import { postProduct } from './form/postProduct'
import { formValidation } from './form/formValidation'
import { header } from './header/header'

const table = new Table

table.create()
postProduct()
formValidation()
header()
