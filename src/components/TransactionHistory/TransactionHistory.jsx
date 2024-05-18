import css from "./Transaction.module.css"

const TransactionHistory = ({items}) =>{
    return    (
<>
<table className={css.table} >
  <thead >
    <tr>
      <th className={css.tableTitle}>Type</th>
      <th className={css.tableTitle}>Amount</th>
      <th className={css.tableTitle}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.body}>
    {items.map(({id,type,amount,currency }) => (
    <tr key={id}>
      <td className={css.bodyTitle}>{type}</td>
      <td className={css.bodyTitle}>{amount}</td>
      <td className={css.bodyTitle}>{currency}</td>
    </tr>
        
    ))}
  </tbody> 
</table>
</>
)}

export default TransactionHistory