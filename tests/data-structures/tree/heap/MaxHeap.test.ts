import { MaxHeap } from '../../../../src/data-structures/tree/heap/MaxHeap';

describe('최대 힙', () => {
  let maxHeap = new MaxHeap<number>();

  beforeEach(() => {
    maxHeap = new MaxHeap<number>();
    maxHeap.insert(10);
    maxHeap.insert(5);
    maxHeap.insert(15);
    maxHeap.insert(3);
    maxHeap.insert(7);
    maxHeap.insert(12);
    maxHeap.insert(18);
  });

  test('요소를 삽입할 수 있어야 합니다', () => {
    maxHeap.insert(20);
    maxHeap.insert(1);
    expect(maxHeap.toArray()).toEqual([20, 18, 15, 7, 5, 10, 12, 3, 1]);
  });

  test('지정된 인덱스의 요소를 업데이트 할 수 있어야 합니다', () => {
    maxHeap.updateAt(2, 20);
    expect(maxHeap.toArray()).toEqual([20, 7, 18, 3, 5, 10, 12]);
    maxHeap.updateAt(0, 1);
    expect(maxHeap.toArray()).toEqual([18, 7, 12, 3, 5, 10, 1]);
  });

  test('지정된 인덱스의 요소를 삭제할 수 있어야 합니다', () => {
    maxHeap.deleteAt(1);
    expect(maxHeap.toArray()).toEqual([18, 12, 15, 3, 5, 10]);
  });

  test('최대값(root)를 제거하고 반환할 수 있어야 합니다', () => {
    expect(maxHeap.poll()).toBe(18);
    expect(maxHeap.toArray()).toEqual([15, 7, 12, 3, 5, 10]);
    expect(maxHeap.poll()).toBe(15);
    expect(maxHeap.toArray()).toEqual([12, 7, 10, 3, 5]);
  });

  test('최대값(root)를 제거하지 않고 반환할 수 있어야 합니다', () => {
    expect(maxHeap.peek()).toBe(18);
  });

  test('최대값(root)를 새로운 값으로 교체하고 반환할 수 있어야 합니다', () => {
    expect(maxHeap.replaceRoot(20)).toBe(18);
    expect(maxHeap.toArray()).toEqual([20, 7, 15, 3, 5, 10, 12]);
    expect(maxHeap.replaceRoot(1)).toBe(20);
    expect(maxHeap.toArray()).toEqual([15, 7, 12, 3, 5, 10, 1]);
  });

  test('힙을 비울 수 있어야 합니다', () => {
    maxHeap.clear();
    expect(maxHeap.toArray()).toEqual([]);
  });

  test('힙에 특정 요소가 있는지 확인할 수 있어야 합니다', () => {
    expect(maxHeap.contains(10)).toBe(true);
    expect(maxHeap.contains(20)).toBe(false);
  });

  test('주어진 배열로 힙을 생성할 수 있어야 합니다', () => {
    maxHeap.buildHeap([8, 4, 9, 2, 6, 1, 7]);
    expect(maxHeap.toArray()).toEqual([9, 6, 8, 2, 4, 1, 7]);
  });

  test('힙의 현재 크기를 반환할 수 있어야 합니다', () => {
    expect(maxHeap.size()).toBe(7);
  });

  test('힙 정렬을 수행하여 배열을 내림차순으로 정렬할 수 있어야 합니다', () => {
    const array = [8, 4, 9, 2, 6, 1, 7];
    expect(maxHeap.heapSort(array)).toEqual([9, 8, 7, 6, 4, 2, 1]);
  });

  test('힙의 유효성을 검사할 수 있어야 합니다', () => {
    expect(maxHeap.isValidHeap()).toBe(true);
    maxHeap.heap[0] = 1;
    expect(maxHeap.isValidHeap()).toBe(false);
  });

  test('k번째 최대값을 찾을 수 있어야 합니다', () => {
    expect(maxHeap.findKthLargest(1)).toBe(18);
    expect(maxHeap.findKthLargest(3)).toBe(12);
    expect(maxHeap.findKthLargest(5)).toBe(7);
    expect(() => maxHeap.findKthLargest(0)).toThrow('Invalid value of k');
  });

  test('힙의 요소를 레벨 순서로 순회하여 반환할 수 있어야 합니다', () => {
    expect(maxHeap.levelOrderTraversal()).toEqual([18, 7, 15, 3, 5, 10, 12]);
  });

  test('다른 힙을 현재 힙과 병합할 수 있어야 합니다', () => {
    const otherHeap = new MaxHeap<number>();
    otherHeap.insert(2);
    otherHeap.insert(14);
    maxHeap.merge(otherHeap);
    expect(maxHeap.toArray()).toEqual([18, 14, 15, 7, 5, 10, 12, 3, 2]);
  });
});
