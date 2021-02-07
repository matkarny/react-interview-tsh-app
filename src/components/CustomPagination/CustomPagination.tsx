import React, { useState } from 'react';

import { Button, Pagination, Table } from 'antd';
import styles from './CustomPagination.module.scss'


export const CustomPagination: React.FC = () => {
  const [page, setPage] = useState(1)
  const lastPage = 80 / 8

  function itemRender(current: number, type: string, originalElement: React.ReactElement<HTMLElement>) {
    if (type === 'prev') {

    }
    if (type === 'next') {

    }
    if (type === 'jump-next') {
      return <p>...</p>;
    }
    if (type === 'jump-prev') {
      return <p>... </p>;
    }
    return originalElement;
  }
  return <div className={styles.paginationWrapper}>
    <Button type="text" onClick={() => setPage(1)} disabled={page === 1} className={styles.firstPage}> First </Button>
    <Pagination size="small" current={page} total={80} itemRender={itemRender} showSizeChanger={false} defaultPageSize={8} onChange={(p) => setPage(p)} />
    <Button type="text" onClick={() => setPage(lastPage)} disabled={page === lastPage} className={styles.lastPage}> Last </Button>
  </div>
};
