export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (!array.length) {
    throw new Error('Creating list from empty array');
  }

  function Node(value) {
    this.value = value;
    this.next = null;
  }

  if (array.length == 1) {
    return new Node(array[0]);
  }

  function link(node1, node2) {
    node1.next = node2;
  }

  let head = new Node(array[0]);
  let cur = head;
  for (let i = 0; i < array.length - 1; i++) {
    cur.next = new Node(array[i+1]);
    cur = cur.next;
  }

  return head;
}
