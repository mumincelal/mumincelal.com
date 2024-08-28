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
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";

const Home = () => {
  const { setTheme } = useTheme();

  return (
    <div className="space-y-6 m-6">
      <div className="flex items-center space-x-2">
        <SunIcon className="size-5" onClick={() => setTheme("light")} />
        <MoonIcon className="size-5" onClick={() => setTheme("dark")} />
      </div>
      <div className="space-y-2">
        <h4 className="underline">Buttons</h4>
        <div className="space-x-2">
          <Button>Filled</Button>
          <Button disabled>Filled - Disabled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="outline" disabled>
            Outline - Disabled
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="underline">Navigation Menu</h4>
        <div className="space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/work" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="underline">Tabs</h4>
        <div className="space-x-2">
          <Tabs
            defaultValue="account"
            orientation="vertical"
            className="flex flex-col"
          >
            <div className="grid grid-cols-2 gap-16">
              <TabsList className="grid grid-cols-1 w-full">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Account</TabsContent>
              <TabsContent value="password">Password</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="underline">Cards</h4>
        <div className="space-x-2">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>CARD CONTENT</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="underline">Badges</h4>
        <div className="space-x-2">
          <Badge>Badge</Badge>
        </div>
      </div>
    </div>
  );
};

export default Home;
