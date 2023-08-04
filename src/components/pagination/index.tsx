import styled from "@emotion/styled";
interface Props {
  totalPage: number;
  page: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PageSelect: React.FC<Props> = ({ totalPage, page, onChange }) => {
  // Generate an array of page numbers from 1 to totalPage
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
  const PageSelect = styled.select({
    border: "1px solid black",
    padding: "0.25rem",
    borderRadius: "4px",
  });
  return (
    <PageSelect value={page} onChange={onChange} className="border p-1">
      {pages.map((page) => (
        <option key={page} value={page}>
          Page {page}
        </option>
      ))}
    </PageSelect>
  );
};

export default PageSelect;
