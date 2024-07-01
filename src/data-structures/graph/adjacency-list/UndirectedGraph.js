export class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // 생성 (Creation) 관련 메서드
  // =========================

  /**
   * 그래프에 새로운 정점을 추가합니다.
   * @param {string} vertex 추가할 정점
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * 두 정점 사이에 간선을 추가합니다.
   * @param {string} vertex1 첫 번째 정점
   * @param {string} vertex2 두 번째 정점
   * @returns {void}
   */
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}
