"use client";

import { useFormik } from "formik";
import { string, object } from "yup";
import { useState } from "react";
import { createCatatan } from "../tambah/action"; // Adjust the import path according to your project structure
import { Button } from "@chakra-ui/react";

export interface FormValue {
  title: string;
  body: string;
}

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = object().shape({
    title: string().required("Title Catatan tidak boleh kosong"),
    body: string().required("Deskripsi Catatan tidak boleh kosong"),
  });

  const form = useFormik<FormValue>({
    validationSchema: formSchema,
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        await createCatatan(Date.now().toString(), values.title, values.body);
        alert("Catatan berhasil disimpan");
        resetForm();
      } catch (error) {
        alert("Terjadi Kesalahan Pada Server");
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const { handleChange, handleSubmit, errors, values } = form;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 py-10">
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Input Judul"
            className="input input-bordered w-full max-w-xs"
            name="title"
            onChange={handleChange}
            value={values.title}
          />
        </label>
        {errors.title && <div className="text-red-500">{errors.title}</div>}
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Deskripsi</span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Input Catatan"
            name="body"
            onChange={handleChange}
            value={values.body}
          ></textarea>
        </label>
        {errors.body && <div className="text-red-500">{errors.body}</div>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="py-6 text-sm text-white" size="md" colorScheme="blue">
        {isSubmitting ? <div className="loading"></div> : "Simpan"}
      </Button>
    </form>
  );
};

export default Form;
