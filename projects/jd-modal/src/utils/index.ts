/**
 * 잠시 대기
 * @param delay
 * @returns
 */
export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), delay);
  });
};
