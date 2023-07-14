import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <h1>Add Product</h1>
        </div>
      </div>
      <div>
        <Input title="Product Name" />
        <Input title="Product Description" />

        <div>
          <h2>Produt Specs</h2>
          {}
          <Input title="Add Product Specs" />
          <Button
            title="+ Add Specs"
            color="white"
            textColor="#000"
            border="1px solid #000"
          />
        </div>

        <div>
          <h2>Produt Details</h2>
          {}
          <Input title="Add Product Specs" />
          <Button
            title="+ Add Specs"
            color="white"
            textColor="#000"
            border="1px solid #000"
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
