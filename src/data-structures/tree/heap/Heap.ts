export class MinHeap<T> {
  heap: T[];

  constructor() {
    this.heap = [];
  }

  /**
   * 힙에 새로운 값을 삽입합니다.
   * @param {T} value - 삽입할 값.
   */
  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  /**
   * 힙에서 최소값을 제거하고 반환합니다.
   * @returns {T | null} - 힙에서 제거된 최소값 또는 null (힙이 비어 있는 경우).
   */
  poll(): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop()!;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();

    return min;
  }

  /**
   * 힙의 최소값을 제거하지 않고 반환합니다.
   * @returns {T | null} - 힙의 최소값 또는 null (힙이 비어 있는 경우).
   */
  peek(): T | null {
    return this.heap.length !== 0 ? this.heap[0] : null;
  }

  /**
   * 힙의 루트 노드를 새로운 값으로 교체하고 힙 속성을 유지합니다.
   * @param {T} value - 교체할 새로운 값.
   * @returns {T | null} - 교체된 이전 최소값 또는 null (힙이 비어 있는 경우).
   */
  replaceRoot(value: T): T | null {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = value;
    this.heapifyDown();

    return min;
  }

  /**
   * 힙을 비웁니다. 모든 요소를 제거합니다.
   */
  clear() {
    this.heap = [];
  }

  /**
   * 특정 값이 힙에 있는지 확인합니다.
   * @param {T} value - 확인할 값.
   * @returns {boolean} - 값이 힙에 있으면 true, 그렇지 않으면 false.
   */
  contains(value: T): boolean {
    return this.heap.includes(value);
  }

  /**
   * 힙의 요소를 배열로 반환합니다.
   * @returns {T[]} - 힙의 요소를 담은 배열.
   */
  toArray(): T[] {
    return [...this.heap];
  }

  /**
   * 주어진 배열로 힙을 생성합니다.
   * @param {T[]} array - 힙으로 만들 배열.
   */
  buildHeap(array: T[]): void {
    this.heap = array;

    for (let i = Math.floor(this.heap.length / 2); i >= 0; --i) {
      this.heapifyDown(i);
    }
  }

  /**
   * 힙의 현재 크기를 반환합니다.
   * @returns {number} - 힙의 크기.
   */
  size(): number {
    return this.heap.length;
  }
}
