import PropTypes from 'prop-types';
import css from '../Transaction/Transaction.module.css';

const TransactionHistory = ({ title, items }) => {
  return (
    <section className={css.transaction}>
      <h2 className={css.title}>{title}</h2>
      <table class={css.table}>
        <thead>
          <tr>
            <th className={css.title__table}>Type</th>
            <th className={css.title__table}>Amount</th>
            <th className={css.title__table}>Currency</th>
          </tr>
        </thead>
        {items.map(user => (
          <Transaction transaction={user} key={user.id} />
        ))}
      </table>
    </section>
  );
};

const Transaction = ({ transaction }) => {
  const { type, amount, currency } = transaction;

  return (
    <tbody>
      <tr>
        <td className={css.list}>{type}</td>
        <td className={css.list}>{amount}</td>
        <td className={css.list}>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
export default TransactionHistory;
