import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import Input from "../ui/Input";
import Select from "../ui/Select";


function EditMeetup() {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

   
  return (
    <>
        <h1>edit</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Username" register={register} required />
            <Input label="Password" register={register} required />
            <input type="submit" />
        </form>
        </>
  );
}

export default EditMeetup;