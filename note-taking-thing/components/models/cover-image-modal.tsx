'use client'

import { 
    Dialog,
    DialogContent,
    DialogHeader
} from '@/components/ui/dialog';
import { useCoverImage } from '@/hooks/use-cover-image';
import { SingleImageDropzone } from '@/components/single-image-dropzone';
import { useState } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export const CoverImageModal = () => {
    const params = useParams();
    const update = useMutation(api.documents.update);
    const [file, setFile] = useState<File>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const coverImage = useCoverImage();
    const { edgestore } = useEdgeStore();

    const onChange = async (file?: File) =>{
        if (file) {
            setIsSubmitting(true);
            setFile(file);

            const res = await edgestore.publicFiles.upload({
                file
            });
            await update ({

            })
        }
    }

    return (
        <Dialog open = {coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className='text-center text-lg font-semibold'>
                        Cover Image
                    </h2>
                </DialogHeader>
                <div>
                    Todo Upload Image
                </div>
            </DialogContent>
        </Dialog>
    )
}