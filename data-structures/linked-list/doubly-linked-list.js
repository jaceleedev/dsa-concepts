class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 리스트의 끝에 노드를 추가합니다.
   * 시간 복잡도: O(1)
   * @param {any} data - 추가할 데이터
   */
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    ++this.size;
  }

  /**
   * 리스트의 시작 부분에 노드를 추가합니다.
   * 시간 복잡도: O(1)
   * @param {any} data - 추가할 데이터
   */
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    ++this.size;
  }

  /**
   * 특정 위치의 노드를 제거하고 데이터를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 제거할 노드의 위치
   * @returns {any} 제거된 노드의 데이터
   */
  removeAt(index) {
    // 인덱스가 유효한 범위 내에 있는지 확인한다.
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of range');
    }

    let removedData;

    // 첫 번째 노드를 제거하는 경우
    if (index === 0) {
      removedData = this.head.data;
      this.head = this.head.next;

      // 리스트에 하나의 노드만 있었던 경우
      if (this.head === null) {
        this.tail = null;
      }
      // 리스트에 여러 개의 노드가 있었던 경우
      else {
        this.head.prev = null;
      }
    }
    // 마지막 노드를 제거하는 경우
    else if (index === this.size - 1) {
      removedData = this.tail.data;

      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    // 그 밖의 노드를 제거하는 경우
    else {
      let current = this.head;
      let count = 0;

      while (count < index) {
        current = current.next;
        ++count;
      }

      removedData = current.data;

      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    --this.size;

    return removedData;
  }

  /**
   * 특정 데이터를 찾아 제거합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 제거할 데이터
   * @returns {any} 제거된 데이터
   */
  remove(data) {
    let current = this.head;

    while (current !== null) {
      // 현재 노드의 데이터와 제거할 데이터가 일치하는 경우
      if (current.data === data) {
        // 현재 노드가 head인 경우
        if (current === this.head) {
          this.head = this.head.next;

          // 리스트에 하나의 노드만 있는 경우
          if (this.head === null) {
            this.tail = null;
          } else {
            this.head.prev = null;
          }
        }
        // 현재 노드가 tail인 경우
        else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        }
        // 현재 노드가 head와 tail 사이에 있는 경우
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        --this.size;

        return data;
      }

      current = current.next;
    }

    return null;
  }

  /**
   * 특정 위치의 노드 데이터를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 데이터를 반환할 노드의 위치
   * @returns {any} 노드의 데이터
   */
  getAt(index) {
    // 인덱스가 유효한 범위 내에 있는지 확인한다.
    if (index < 0 || index >= this.size) {
      throw new RangeError('Index out of range');
    }

    let current;
    let count;

    // 인덱스가 리스트 길이의 중간보다 앞에 있는 경우
    if (index < this.size / 2) {
      current = this.head;
      count = 0;

      while (count < index) {
        current = current.next;
        ++count;
      }
    }
    // 인덱스가 리스트 길이의 중간보다 뒤에 있는 경우
    else {
      current = this.tail;
      count = this.size - 1;

      while (count > index) {
        current = current.prev;
        --count;
      }
    }

    return current.data;
  }

  /**
   * 특정 위치에 노드를 삽입합니다.
   * 시간 복잡도: O(n)
   * @param {number} index - 노드를 삽입할 위치
   * @param {any} data - 삽입할 데이터
   */
  insertAt(index, data) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    const newNode = new Node(data);

    if (index === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let current = this.head;
      let count = 0;

      while (count < index) {
        current = current.next;
        ++count;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }

    ++this.size;
  }

  /**
   * 리스트를 비웁니다.
   * 시간 복잡도: O(1)
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * 리스트의 크기를 반환합니다.
   * 시간 복잡도: O(1)
   * @returns {number} 리스트의 크기
   */
  getSize() {
    return this.size;
  }

  /**
   * 리스트가 비어있는지 확인합니다.
   * 시간 복잡도: O(1)
   * @returns {boolean} 리스트가 비어있으면 true, 그렇지 않으면 false
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 리스트의 모든 요소를 출력합니다.
   * 시간 복잡도: O(n)
   */
  print() {
    let current = this.head;
    let listString = '';

    while (current !== null) {
      listString += `${current.data} <-> `;
      current = current.next;
    }

    console.log(listString + 'null');
  }

  /**
   * 리스트에 특정 데이터가 포함되어 있는지 확인합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 확인할 데이터
   * @returns {boolean} 데이터가 포함되어 있으면 true, 그렇지 않으면 false
   */
  contains(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  /**
   * 리스트에서 특정 데이터의 인덱스를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 인덱스를 찾을 데이터
   * @returns {number} 데이터의 인덱스 (없으면 -1)
   */
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      ++index;
    }

    return -1;
  }

  /**
   * 리스트에서 특정 데이터의 마지막 인덱스를 반환합니다.
   * 시간 복잡도: O(n)
   * @param {any} data - 마지막 인덱스를 찾을 데이터
   * @returns {number} 데이터의 마지막 인덱스 (없으면 -1)
   */
  lastIndexOf(data) {
    let current = this.tail;
    let index = this.size - 1;

    while (current !== null) {
      if (current.data === data) {
        return index;
      }

      current = current.prev;
      --index;
    }

    return -1;
  }

  /**
   * 리스트를 반대로 뒤집습니다.
   * 시간 복잡도: O(n)
   */
  reverse() {
    let current = this.head;
    let temp = null;

    while (current !== null) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  /**
   * 리스트를 배열로 변환합니다.
   * 시간 복잡도: O(n)
   * @returns {any[]} 리스트의 요소를 포함하는 배열
   */
  toArray() {
    const array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }

    return array;
  }

  /**
   * 리스트를 복사합니다.
   * 시간 복잡도: O(n)
   * @returns {DoublyLinkedList} 복사된 리스트
   */
  clone() {
    const newList = new DoublyLinkedList();
    let current = this.head;

    while (current !== null) {
      newList.append(current.data);
      current = current.next;
    }

    return newList;
  }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

list.print(); // 1 <-> 2 <-> 3 <-> null

console.log(list.getAt(1)); // 2

list.insertAt(1, 4);

list.print(); // 1 <-> 4 <-> 2 <-> 3 <-> null

console.log(list.removeAt(1)); // 4

list.print(); // 1 <-> 2 <-> 3 <-> null

console.log(list.contains(2)); // true
console.log(list.indexOf(3)); // 2
console.log(list.lastIndexOf(3)); // 2

list.reverse();

list.print(); // 3 <-> 2 <-> 1 <-> null

console.log(list.toArray()); // [3, 2, 1]

const clonedList = list.clone();

clonedList.print(); // 3 <-> 2 <-> 1 <-> null

console.log(list.getSize()); // 3
console.log(list.isEmpty()); // false

list.clear();

console.log(list.isEmpty()); // true

list.print(); // null
