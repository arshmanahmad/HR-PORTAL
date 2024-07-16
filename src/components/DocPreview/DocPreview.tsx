import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

interface IDocPreviewProps {
  fileUrl: string;
}

const DocPreview = ({ fileUrl }: IDocPreviewProps) => {
  const docs = [{ uri: fileUrl }];

  return (
    <div>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  );
};

export default DocPreview;
