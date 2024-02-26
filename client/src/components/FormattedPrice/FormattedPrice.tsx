interface Amount {
  amount: number;
}

const FormatedPrice = ({ amount }: Amount) => {
  const formattedAmmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return <span>{formattedAmmount}</span>;
};

export default FormatedPrice;
