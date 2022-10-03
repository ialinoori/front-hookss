import Layout from "@/containers/Layout";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Head from "next/head";
import Input from "@/components/FormInput";
import { useAuth, useAuthActions } from "@/context/AuthContext";
import { useRouter } from "next/router";

// initial values for the form
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

// validation schema for the form
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام و نام خانوادگی را وارد کنید")
    .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد"),
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .email("ایمیل نامعتبر است!"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد!"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد"),
  confirmPassword: Yup.string()
    .required("تکرار رمز عبور را وارد کنید")
    .oneOf([Yup.ref("password"), null], "رمز عبور و تکرار آن باید یکسان باشد"),
});

const RegisterForm = () => {
  const dispatch = useAuthActions();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  // onSubmit handler for the form
  const onSubmit = (values) => {
    const { email, password, name, phoneNumber } = values;
    dispatch({
      type: "SIGNUP",
      payload: { name, email, password, phoneNumber },
    });
  };
  // formik hook
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-black text-2xl text-violet-700 mb-4">ثبت نام</h1>
          <Input label="نام و نام خانوادگی" name="name" formik={formik} />
          <Input label="ایمیل " name="email" formik={formik} />
          <Input
            label="شماره موبایل "
            name="phoneNumber"
            formik={formik}
            type="tel"
            placeholder="09121234567"
          />
          <Input
            label=" رمز عبور "
            name="password"
            formik={formik}
            type="password"
          />
          <Input
            label="  تکرار رمز  "
            name="confirmPassword"
            formik={formik}
            type="password"
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg  bg-violet-800 text-white"
          >
            ثبت نام
          </button>
          <Link href="/signin">
            <p className="mt-4 py-4 cursor-pointer">
              {" "}
              قبلا ثبت نام کردی؟لاگین کنید
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterForm;
