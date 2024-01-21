/** components */
import { Button } from "./ui";
import { CopyIcon } from "../assets";
import GithubIcon from "../assets/github-icon";

/** packages */
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
      placeholder="Write whatever you want."
      plugins={[
        headingsPlugin(),
        toolbarPlugin({
          toolbarContents: () => <ToolBarFunctions copyText={copyText} />,
        }),
      ]}
      className="dark-theme dark-editor h-full w-full overflow-y-scroll rounded-xl bg-black"
    />
  );
}

/** toolbar function */

interface ToolBarFunctionsProps {
  copyText: () => void;
}

export function ToolBarFunctions({ copyText }: ToolBarFunctionsProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-3">
        <UndoRedo />
        <BoldItalicUnderlineToggles />
        <Button copyText={copyText}>
          <CopyIcon size={18.5} />
        </Button>
      </div>
      <div className="flex items-center px-3">
        <a
          href="https://github.com/sanketghosh/pastemonk"
          target="_blank"
          className="rounded-sm p-1.5 transition-all hover:bg-neutral-700"
        >
          <GithubIcon size={19} />
        </a>
      </div>
    </div>
  );
}
