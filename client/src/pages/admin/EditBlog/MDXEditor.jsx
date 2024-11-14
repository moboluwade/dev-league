import {
  headingsPlugin,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor"
import "@mdxeditor/editor/style.css"
import { useRef, useEffect } from "react"

const Editor = ({ mdxValue, setMdxValue }) => {
  const mdxEditorRef = useRef(null)

  useEffect(() => {
    if (mdxEditorRef.current) {
      mdxEditorRef.current.setMarkdown(mdxValue)
    }
  }, [mdxValue])

  const handleChange = () => {
    if (mdxEditorRef.current) {
      const value = mdxEditorRef.current.getMarkdown()
      setMdxValue(value)
    }
  }

  return (
    <MDXEditor
      className=""
      ref={mdxEditorRef}
      onChange={handleChange}
      placeholder="Let's create to the fullest!"
      markdown={mdxValue}
      contentEditableClassName="editor min-h-[20rem]"
      plugins={[
        linkPlugin(),
        linkDialogPlugin(),
        headingsPlugin({ allowedHeadingLevels: [1, 4, 5, 6] }),
        listsPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <Separator />
              <BoldItalicUnderlineToggles />
              <Separator />
              <CreateLink />
              <ListsToggle options={["bullet", "number"]} />
              <BlockTypeSelect />
            </>
          ),
        }),
      ]}
    />
  )
}

export default Editor