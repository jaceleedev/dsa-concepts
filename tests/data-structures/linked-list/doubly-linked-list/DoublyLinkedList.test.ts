import { DoublyLinkedList } from '../../../../src/data-structures/linked-list/doubly-linked-list/DoublyLinkedList';

describe('이중 연결 리스트', () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  test('초기에는 비어있어야 합니다.', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.length()).toBe(0);
  });

  test('요소를 뒤에 추가할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.length()).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('요소를 앞에 추가할 수 있어야 합니다', () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.length()).toBe(3);
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('지정된 인덱스에 요소를 삽입할 수 있어야 합니다', () => {
    list.append(1);
    list.append(3);
    list.insertAt(1, 2);
    expect(list.length()).toBe(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('지정된 인덱스의 요소를 가져올 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.getAt(1)).toBe(2);
  });

  test('지정된 인덱스의 요소를 업데이트할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.updateAt(1, 4);
    expect(list.getAt(1)).toBe(4);
  });

  test('지정된 인덱스의 요소를 제거할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.removeAt(1);
    expect(list.length()).toBe(2);
    expect(list.toArray()).toEqual([1, 3]);
  });

  test('리스트에 특정 요소가 있는지 확인할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(4)).toBe(false);
  });

  test('특정 요소의 인덱스를 찾을 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.find(2)).toBe(1);
    expect(list.find(4)).toBe(-1);
  });

  test('리스트를 뒤집을 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.reverse();
    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('리스트를 비울 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.clear();
    expect(list.isEmpty()).toBe(true);
    expect(list.length()).toBe(0);
  });

  test('리스트의 요소를 출력할 수 있어야 합니다', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    list.print();
    expect(consoleSpy).toHaveBeenCalledWith('1 <-> 2 <-> 3');
    consoleSpy.mockRestore();
  });

  test('빈 리스트의 엣지 케이스를 처리할 수 있어야 합니다', () => {
    expect(() => list.getAt(0)).toThrow(RangeError);
    expect(() => list.updateAt(0, 1)).toThrow(RangeError);
    expect(() => list.removeAt(0)).toThrow(RangeError);
  });
});
