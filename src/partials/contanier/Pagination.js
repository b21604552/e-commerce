import React, { useEffect, useState } from 'react'

export default function Pagination (props) {
  const [pagination, setPagination] = useState(props.pagination)

  useEffect(() => {
    setPagination(props.pagination)
  }, [props.pagination])

  return (
    <div className={'pagination-wrapper'}>
      {
        pagination !== null && (
          <>

            {pagination.isPrevEnable && (
              <div id={'prev-page'} className={'pagination-element pagination-prev'} onClick={() => props.setPage(pagination.currentPage - 1)}>&lt;</div>
            )}

            {pagination.pages.length > 0 && (
              <>
                {
                  pagination.pages.map((page) => (
                    <div id={'page-' + page.key} key={'page-' + page.key} className={page.active ? ('pagination-element pagination-element-active') : ('pagination-element')}
                         onClick={() => props.setPage(page.key)}>{page.key}</div>
                  ))
                }
              </>
            )}

            {pagination.isNextEnable && (
              <div id={'next-page'} className={'pagination-element pagination-next'} onClick={() => props.setPage(pagination.currentPage + 1)}>></div>
            )}

          </>
        )
      }
    </div>
  )
}