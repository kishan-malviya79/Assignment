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

interface FormFields {
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  phoneNumber?: number;
  age?: number;
  gander?: "male" | "female";
  dob?: Date;
}

export function LoginForm() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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
              <Label htmlFor="email">First Name</Label>
              <Input {...register("name")} id="name" type="" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Last Name</Label>
              <Input
                {...register("lastname")}
                id="lastname"
                type=""
                placeholder=""
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label {...register("password")} htmlFor="password">
                  Password
                </Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                {...register("password")}
                id="password"
                type="password"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number </Label>
              <Input
                {...register("phoneNumber")}
                id="phone"
                type="number"
                placeholder=""
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Age</Label>
              <Input
                {...register("age")}
                id="phone"
                type="number"
                placeholder=""
                required
              />
            </div>
            <RadioGroup defaultValue="option-one">
              <Label htmlFor="option-one">Gander</Label>
              <div className="flex justify-evenly items-center ">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label {...register("gander")} htmlFor="option-one">
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label {...register("gander")} htmlFor="option-two">
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

            <Button type="submit" className="w-full">
              Login
            </Button>
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
