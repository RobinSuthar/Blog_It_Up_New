"use client";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  async function handleClick(event: React.FormEvent) {
    event.preventDefault(); //
    console.log("SAdad");
    const response = await axios.post("http://127.0.0.1:8787/api/v1/signup", {
      name: username,
      email: email,
      password: password,
    });

    console.log(response);
    console.log("hello");
  }

  function onClickLogin() {
    navigate("/signin");
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Create an Account
          </CardTitle>
          <CardDescription className="text-center">
            Already Have an Account ?{" "}
            <span className="text-purple-500">
              <button onClick={onClickLogin}>Login</button>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  id="username"
                  type="name"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  required
                />
              </div>
              <Button onClick={handleClick} type="submit" className="w-full">
                Create an Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
