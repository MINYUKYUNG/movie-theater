import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { getSearch } from '@apis/index';

// how to use
// this hook parameter all optional
// 만약 search페이지 제외한 다른 페이지에서 사용하고 싶은경우
// const { movies,refetch,isLoading,ref } = useInfiQry(undefined, promise함수이름);
// 불러온 객체를 어떻게 쓰는지 보시고 싶으면 pages/SearchMoviePage 참고 바랍니다.
export const useInfiQry = (
  queryString?: string,
  queryFn?: (pageNum: number) => Promise<any>
) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const {
    data: movies,
    fetchNextPage: nextPage,
    hasNextPage: hasNext,
    refetch,
    isLoading,
  } = useInfiniteQuery(
    ['page'],
    queryFn === undefined
      ? async ({ pageParam = 1 }) => await getSearch(pageParam, queryString)
      : async ({ pageParam = 1 }) => await queryFn(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !(lastPage.page === lastPage.total_pages) && lastPage.page + 1,
    }
  );

  useEffect(() => {
    if (inView && hasNext) nextPage();
  }, [inView]);

  return {
    movies,
    refetch,
    isLoading,
    ref,
  };
};
