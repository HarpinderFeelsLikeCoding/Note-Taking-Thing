'use client';

import {
    BlockNoteEditor,
    PartialBlock
} from '@blocknote/core';

import {
    BlockNoteView,
    useBlockNote
} from '@blocknote/react';

import '@blocknote/core/style.css';

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
};

export const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    let parsedInitialContent: PartialBlock[] | undefined;
    try {
        parsedInitialContent = initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined;
    } catch (error) {
        console.error("Failed to parse initialContent", error);
        parsedInitialContent = undefined;
    }

    const editor = useBlockNote({
        editable,
        initialContent: parsedInitialContent,
        onEditorContentChange: (editor) => {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
        },
    });

    return (
        <div>
            <BlockNoteView editor={editor} />
        </div>
    )
}