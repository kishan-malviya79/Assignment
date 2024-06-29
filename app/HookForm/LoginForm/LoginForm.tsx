"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { FormControl } from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { SubmitHandler, useForm } from "react-hook-form";
import { resolve } from "path";
import { error } from "console";

interface FormFields {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber: number;
  age: number;
  gender: "male" | "female";
  dob: Date;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      gender: "male"
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // try{
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error();
    console.log(data);
    // }
    // catch (error){
    //   setError("root",{
    //     message: "The email is already taken "
    //   }})
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Card className="mx-auto   max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="fistName">First Name</Label>
              <Input
                {...register("name", {
                  required: "First Name is required",
                })}
                type="text"
                placeholder=""
              />
            </div>
            {errors.name && (
              <div className=" text-red-500">{errors.name.message} </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                {...register("lastname", {
                  required: "Last Name is required",
                })}
                type="text"
                placeholder=""
              />
            </div>
            {errors.lastname && (
              <div className=" text-red-500">{errors.lastname.message} </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Email must include @";
                    }
                    return true;
                  },
                })}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
              {errors.email && (
                <div className=" text-red-500">{errors.email.message}</div>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                  htmlFor="password"
                >
                  Password
                </Label>
              </div>
              <Input {...register("password")} id="password" type="password" />
            </div>
            {errors.password && (
              <div className=" text-red-500">{errors.password.message}</div>
            )}
            {/* <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                  >
                  Forgot your password?
                  </Link> */}

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number </Label>

              <Input
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                id="phone"
                type="number"
                placeholder=""
              />
              {errors.phoneNumber && (
                <div className=" text-red-500">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Age</Label>
              <Input
                {...register("age", {
                  required: " Age is Required",
                })}
                id="phone"
                type="number"
                placeholder=""
              />
              {errors.age && (
                <div className=" text-red-500">{errors.age.message}</div>
              )}
            </div>
            <RadioGroup defaultValue="">
              <Label htmlFor="option-one">Gander</Label>
              <div className="flex justify-evenly items-center ">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label
                    {...register(
                      "gender"
                      // {
                      //   required: " Gende is Required",
                      // }
                    )}
                    htmlFor="option-one"
                  >
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label
                    {...register(
                      "gender"
                      //   {
                      //   required: " Gende is Required",
                      // }
                    )}
                    htmlFor="option-two"
                  >
                    Female
                  </Label>
                </div>
              </div>
            </RadioGroup>
           

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-[240px] pl-3 text-left font-normal")}
                >
                  <span>Pick a date</span>
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? "loading..." : "Submit"}
            </Button>
            {/* {errors.root && (
                <div className=" text-red-500">{errors.root.message}</div>
              )} */}
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
