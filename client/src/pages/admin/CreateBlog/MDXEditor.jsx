import { headingsPlugin, BlockTypeSelect, BoldItalicUnderlineToggles, CreateLink, ListsToggle, MDXEditor, Separator, UndoRedo, linkDialogPlugin, linkPlugin, listsPlugin, toolbarPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { useRef } from 'react'

// use the markdown$ cell to get the current markdown value,
// and the rootEditor$ cell to get the Lexical editor instance.

const Editor = ({mdxValue, setMdxValue}) => {
    const mdxEditorRef = useRef(null)

    const handleChange = () => {
        if (mdxEditorRef.current) {
            // capture the markdown editor value
            const value = mdxEditorRef.current.getMarkdown()
            console.log(value)
            setMdxValue(value)
        }
    }

    return (
        <MDXEditor
            ref={mdxEditorRef}
            onChange={() => { handleChange() }}
            markdown={mdxValue}
            contentEditableClassName='editor'
            // plugins={[headingsPlugin(), imagePlugin()]}
            plugins={[
                linkPlugin(), linkDialogPlugin(), headingsPlugin(
                    { allowedHeadingLevels: [1, 4, 5, 6] }
                ),
                listsPlugin(),
                toolbarPlugin({
                    toolbarContents: () => (
                        <>
                            {' '}
                            <UndoRedo />
                            <Separator />
                            {/* <InsertCodeBlock /> */}
                            <BoldItalicUnderlineToggles />
                            <Separator />
                            <CreateLink />
                            <ListsToggle options={['bullet', 'number']} />
                            <BlockTypeSelect />
                        </>
                    )
                }),

            ]}
        />
    )
}

export default Editor