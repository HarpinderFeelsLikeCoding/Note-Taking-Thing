'use client'
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
    const { user } = useUser();

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src='/vacancy-light.png'
                height='300'
                width='300'
                alt='Empty'
                className="dark:hidden"
            />
            <p>Test paragraph</p>

            <Image
                src='/vacancy-dark.png'
                height='300'
                width='300'
                alt='Empty'
                className="hidden dark:block"
            />
        

            <h2 className="text-lg font-medium">
                Welcome to your notebook, {user?.firstName}!
            </h2>

            <Button>
                <PlusCircle className = "h-4 w-4 mr-1"/>
                    Create a note
            </Button>
        </div>
    );
}

export default DocumentsPage;