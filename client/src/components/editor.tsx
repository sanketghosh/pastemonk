/** components */
import { Button } from "./ui";
import { CopyIcon } from "../assets";

import {
  BoldItalicUnderlineToggles,
  MDXEditor,
  UndoRedo,
  headingsPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Editor() {
  const [editorText, setEditorText] = useState<string>("");

  console.log(editorText);

  const copyText = async () => {
    try {
      if (editorText.length > 0) {
        await navigator.clipboard.writeText(editorText);
        toast.success("Text copied to clipboard");
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  return (
    <MDXEditor
      markdown={editorText}
      onChange={(text) => setEditorText(text)}
      plugins={[
        headingsPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <div className="flex items-center gap-3">
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <Button copyText={copyText}>
                <CopyIcon size={18.5} />
              </Button>
            </div>
          ),
        }),
      ]}
      className="dark-theme dark-editor h-full w-full overflow-y-scroll rounded-lg bg-zinc-950"
    />
  );
}
