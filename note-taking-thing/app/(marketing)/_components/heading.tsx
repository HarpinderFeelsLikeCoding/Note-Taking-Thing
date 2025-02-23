"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className = "text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas, Documents and Plans Unified! <span className="underline">your notebook</span> </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                your notebook is where better and faster starts
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size='lg'></Spinner>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href='/documents'>
                        Open your notebook?
                        <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode = 'modal'>
                    <Button>
                        Get Your Own Notebokk For Free
                        <ArrowRight className= 'h-4 w-4 ml-2'></ArrowRight>
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}