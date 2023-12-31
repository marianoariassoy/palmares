import { useState } from "react";
import { useForm } from "react-hook-form";
import { dataContact } from "../data/Data";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Form = () => {
  const lan = "es";
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    const sender = {
      to: "palmareshousing@gmail.con",
      from: "no-reply@palmareshousing.com.ar",
      from_name: "Palmares",
      subject: "Contacto",
    };

    axios
      .post("http://palmareshousing.com.ar/backend/send-email.php ", {
        ...data,
        ...sender,
      })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      });
  };

  const Error = () => {
    return (
      <div className="text-sm font-medium mt-1 text-primary">
        {dataContact[lan].required}
      </div>
    );
  };

  return (
    <>
      {error ? (
        <span className="text-2xl">{dataContact[lan].error}</span>
      ) : sended ? (
        <span className="text-3xl">{dataContact[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 font-light text-white text-sm">
            <div>
              <input
                className="w-full bg-primary h-11 text-white px-4"
                placeholder={dataContact[lan].name}
                {...register("name", { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <input
                className="w-full bg-primary h-11 text-white px-4"
                placeholder={dataContact[lan].city}
                {...register("city")}
              />
            </div>
            <div>
              <input
                className="w-full bg-primary h-11 text-white px-4"
                placeholder={dataContact[lan].email}
                {...register("email", { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div>
              <input
                className="w-full bg-primary h-11 text-white px-4"
                placeholder={dataContact[lan].location}
                {...register("location")}
              />
            </div>
            <div>
              <input
                className="w-full bg-primary h-11 text-white px-4"
                placeholder={dataContact[lan].phone}
                {...register("phone", { required: true })}
              />
              {errors.phone && <Error />}
            </div>
            <div>
              <input
                className="w-full bg-primary h-11 text-white px-4"
                placeholder={dataContact[lan].country}
                {...register("country")}
              />
            </div>
          </div>
          <textarea
            className="w-full bg-primary h-44 text-white p-4 my-4 font-light"
            placeholder={dataContact[lan].message}
            {...register("message")}
          />

          {sending ? (
            <BeatLoader className="mt-6" />
          ) : (
            <button
              type="submit"
              className="bg-secondary text-sm text-white h-11 hover:bg-black hover:shadow-xl transition px-8"
            >
              {dataContact[lan].send}
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default Form;
