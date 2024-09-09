import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import useSWR, { Fetcher } from "swr";
import { Category } from "@/types";

export default function Home() {
  const fetcher: Fetcher<Category[], string> = (args) =>
    fetch(args)
      .then((res) => res.json())
      .then((res) => res.data);

  // const { data, error, isLoading } = useSWR<Category[]>(
  //   process.env.NEXT_PUBLIC_API_URL
  // );

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries size={34} />
      </SheetTrigger>

      <SheetContent
        className={cn("px-4 w-full [&>#closeBtn]:text-3xl", "md:w-[400px]")}
      >
        <div className="mt-10">
          <Tabs defaultValue="category">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="category">Categories</TabsTrigger>
              <TabsTrigger value="page">Pages</TabsTrigger>
            </TabsList>

            <TabsContent value="category">
              <div className="flex flex-col gap-8 h-full">TODO: API CALL</div>
            </TabsContent>
            <TabsContent value="page">TODO: API CALL</TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
