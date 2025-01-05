"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className = "text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Documents and Plans Unified! <span className="underline">your notebook</span> </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                your notebook is where better and faster starts
            </h3>
            <Button>
                Open your notebook?
                <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
            </Button>
        </div>
    )
}