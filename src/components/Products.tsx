export interface ProductsProps {
    value: number,
    data?: string
  }

export const Products = (props: ProductsProps) =>  <h3>{props.value} {props.data }prodotti</h3>
  
export const Products2: React.FC<ProductsProps> = (props) => 
      <div>{props.value} prodotti FC</div>