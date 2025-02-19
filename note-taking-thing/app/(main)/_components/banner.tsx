'use client'

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from 'sonner';
import { ConfirmModal } from "@/components/models/confirm-model";

interface BannerProps{
    documentId: Id<"documents">;
}

export const Banner = ({
    documentId
}: BannerProps) => {

    const router = useRouter();
    const remove = useMutation(api.documents.remove);
    const restore = useMutation(api.documents.restore);

    const onRemove = () => {
        const promise = remove({id: documentId });

        toast.promise(promise, {
            loading: 'Deleting note...',
            success: "Note deleted!",
            error: 'Failed to delete note'
        });
    };

    const onRestore = () => {
        const promise = restore ({id: documentId });

        toast.promise(promise, {
            loading: 'Restoring note...',
            success: "Note restored!",
            error: 'Failed to restore note'
        });
    };


    return (
        <div className = 'w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center'>
            <p>This page is in the Trash: Either Restore or Permanently Delete From The List On The Left</p>
            
        </div>

    )
}