import React, { useState } from "react";
import styles from "./AddSeries.module.css";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useAddSeriesMutation } from "../../../../store/services/adminApi";
import { AddSeriesResposneBody } from "../../../../store/types";
import Modal from "../../../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const AddSeries = (props: Props) => {
  const [SeriesName, setSeriesName] = useState("");
  const [open, setOpen] = useState(false);

  const [addSeries] = useAddSeriesMutation();

  const handleAddSeries = async () => {
    try {
      await addSeries({ body: { name: SeriesName } }).then((res) => {
        if (res.success) {
          setOpen(true);
          setSeriesName("");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Add Series</h1>
        <div className={styles.d_card_container}>
          <div className={styles.d_card}>
            <div>
              <Input
                title="Series Name"
                placeholder="Name of the Series"
                required
                value={SeriesName}
                onChange={(e) => setSeriesName(e.target.value)}
              />
            </div>
            <div className={styles.d_button}>
              <Button
                title={"Add Series"}
                color={""}
                textColor={""}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onCLick={() => handleAddSeries()}
              />
            </div>
          </div>
          <div>
            {open && (
              <Modal
                icon={<FontAwesomeIcon icon={faCheckCircle} color="green" />}
                title="Success"
                content="Series Added Successfully"
                setOpen={setOpen}
                auto={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSeries;
