"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import Link from "next/link";

const Home = () => (
  <>
    <div className="text-center">
      <h1 className="text-secondary dark:text-white font-source-code">
        Hello, I'm Mümin Celal Pinar
      </h1>
    </div>
  </>
);

export default Home;
