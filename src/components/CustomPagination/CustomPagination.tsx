import Button from 'antd/lib/button/button'
import Pagination from 'antd/lib/pagination/Pagination'
import Spinner from 'components/Spinner/Spinner';
import useFetchProducts from 'hooks/useFetchProducts';
import React, { useContext } from 'react';
import { AppContext } from 'store/AppStore';
import styles from './CustomPagination.module.scss';



export const CustomPagination: React.FC = () => {
  const { setPage } = useFetchProducts()
  const { state } = useContext(AppContext);
  const { paginationInfo, page } = state
  const setToFirst = () => setPage(1)
  const setToLast = () => paginationInfo && setPage(paginationInfo.totalPages)

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
  return <>{paginationInfo ? <div className={styles.paginationWrapper}>
    <Button type="text" onClick={setToFirst} className={styles.firstPage}> First </Button>
    <Pagination size="small" current={page} total={paginationInfo.totalItems} itemRender={itemRender} showSizeChanger={false} defaultPageSize={paginationInfo.itemCount} onChange={(p) => setPage(p)} />
    <Button type="text" onClick={setToLast} disabled={page === paginationInfo.totalPages} className={styles.lastPage}> Last </Button>
  </div> : <Spinner />}
  </>
};

export default CustomPagination