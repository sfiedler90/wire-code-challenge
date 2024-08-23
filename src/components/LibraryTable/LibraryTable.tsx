import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Rating } from "../Rating/Rating";
import { Container, Row, Col } from "react-bootstrap";
import { Pagination } from "../Pagination/Pagination";

import "./LibraryTable.css";

type LibraryTableProps = {
  items: LibraryItem[];
};

type LibraryItem = {
  name: string;
  owner: string;
  rating: number;
};

const ITEMS_PER_PAGE = 5;

export const LibraryTable: React.FC<LibraryTableProps> = ({ items }) => {
  const [page, setPage] = useState(1);

  const maxPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const pageItems = items.slice(
    ITEMS_PER_PAGE * (page - 1),
    ITEMS_PER_PAGE * page
  );

  useEffect(() => setPage(1), [items]);

  return (
    <div className="library-table">
      <LibraryTableList items={pageItems} />

      {items.length > 0 && (
        <Container>
          <Row className="justify-content-center" xs="auto" sm="auto" lg="auto">
            <Col>
              <Pagination active={page} number={maxPages} onClick={setPage} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

type ListItemTableProps = {
  items: LibraryItem[];
};

const LibraryTableList: React.FC<ListItemTableProps> = ({ items }) => {
  const renderLibraryItem = (item: LibraryItem, index: number) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.owner}</td>
      <td>
        <Rating rating={item.rating} />
      </td>
    </tr>
  );

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Rating</th>
        </tr>
      </thead>
      {items.length > 0 && <tbody>{items.map(renderLibraryItem)}</tbody>}
    </Table>
  );
};
