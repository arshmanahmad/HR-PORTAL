import { useState } from "react";
import LoginImg from "../../assets/images/loginPageImg.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

interface numberValue {
  phoneNumber: string;
}
interface passValue {
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [userExistense, setUserExistense] = useState(false);
  const numberFormik = useFormik<numberValue>({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        // .matches(/^\+225 \d{2} \d{4} \d{4}$/, 'Phone number must be in the format +225 00 0000 0000')
        .min(13, "phone number must be of 13 digits")
        .required("Required"),
    }),
    onSubmit: () => {
      setUserExistense(!userExistense);
    },
  });
  const passwordFormik = useFormik<passValue>({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: () => {
      navigate("/dashboard");
    },
  });

  return (
    <>
      <div className=" w-full flex overflow-hidden ">
        <div className="w-[50%] h-[100vh] bg-[#f1f5f9] flex flex-col items-center">
          <div className="pt-20 ltr:pl-20 rtl:pr-20 max-w-[520px] pt-20 ">
            <h4 className="text-[2.2rem] font-[400]">
              Chu de cocody <br />
              <span className="text-slate-800 text-[2.5rem] font-[600] dark:text-slate-400">
                Espace reservé pour les agents du Chu
              </span>
            </h4>
          </div>
          <div className="  left-0 w-full  h-full bottom-[-130px]">
            <div
              style={{ backgroundImage: `url(${LoginImg})` }}
              className="h-full w-full bg-contain bg-cover bg-center bg-no-repeat"
            ></div>
          </div>
        </div>
        <div className="lg-inner-column w-[50%]">
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="h-full ">
                {!userExistense ? (
                  <div className="container flex h-[100vh] w-full items-center justify-center ">
                    <div className="mx-4 w-full flex items-center justify-center ">
                      <div className="flex w-full  h-full flex-col items-center  justify-center rounded-lg">
                        <h2 className="mb-4  text-[1.2rem] font-[500]   text-gray-600 text-center">
                          Entrez votre numero
                        </h2>
                        <form
                          onSubmit={numberFormik.handleSubmit}
                          className="w-full flex flex-col items-center"
                        >
                          {/*  */}
                          <input
                            type="number"
                            {...numberFormik.getFieldProps("phoneNumber")}
                            className="
                                                    w-[17rem]
                                                                    min-w-[4rem]
                                                                    rounded
                                                                    border
                                                                    px-3
                                                                    py-2
                                                                    text-gray-700
                                                                    focus:outline-none
                                                                    "
                            id="mobile"
                            aria-required
                            placeholder="+225 00 0000 0000"
                            required
                            // {...formData.register("mobile")}
                          />
                          {numberFormik.touched.phoneNumber &&
                          numberFormik.errors.phoneNumber ? (
                            <div
                              className="    w-[17rem]
                                                        min-w-[4rem]"
                            >
                              <div className="text-red-500 ">
                                {numberFormik.errors.phoneNumber}
                              </div>
                            </div>
                          ) : null}
                          <button
                            className="
                                                        w-[17rem]
                                                        min-w-[4rem]
                                                        mt-2  bg-blue-400 py-2 text-gray-10 focus:outline-none text-white "
                            type="submit"
                          >
                            Envoyer
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="container  h-[100vh] flex w-full items-center justify-center ">
                    <div className="mx-auto w-[600px]">
                      <div className="flex w-full h-[400px] flex-col items-center   justify-center rounded-lg ">
                        <form
                          onSubmit={passwordFormik.handleSubmit}
                          className="w-full rounded-lg"
                        >
                          <div className="mt-6 flex justify-center font-bold">
                            <img
                              className="mb-3 h-20 w-20"
                              src="https://dummyimage.com/64x64"
                            />
                          </div>
                          <h2 className="mb-8 text-center text-2xl text-gray-700">
                            Entrez votre mot de passe
                          </h2>
                          <div className="px-12 pb-10">
                            <div className="mb-2 w-full">
                              <div className="">
                                <input
                                  {...passwordFormik.getFieldProps("password")}
                                  type="password"
                                  placeholder="Password"
                                  name="password"
                                  className="w-full  rounded  border px-3 py-2  text-gray-700  focus:outline-none"
                                  // {...formPassword.register("password")}
                                />
                                {passwordFormik.touched.password &&
                                passwordFormik.errors.password ? (
                                  <div className="text-red-500 ">
                                    {passwordFormik.errors.password}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="  mt-2 w-full bg-blue-400 py-2 text-gray-10 focus:outline-none text-white "
                            >
                              Connectez-vous
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
