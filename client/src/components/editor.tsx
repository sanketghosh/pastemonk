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

export default function Editor() {
  return (
    <MDXEditor
      markdown="# Hello world"
      plugins={[
        headingsPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <div className="flex items-center gap-3">
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <Button>
                <CopyIcon size={18.5} />
              </Button>
            </div>
          ),
        }),
      ]}
      className="dark-theme dark-editor h-full w-full overflow-scroll rounded-lg bg-zinc-950"
    />
  );
}
