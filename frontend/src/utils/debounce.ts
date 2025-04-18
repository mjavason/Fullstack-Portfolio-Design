export function debounceSetter<T>(setter: (val: T) => void, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return (value: T) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => setter(value), delay);
  };
}
