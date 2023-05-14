var middleNode = function(head) {
  let length = 0;
  let current = head;
  while (current) {
      length += 1;
      current = current.next
  }
  var middleIndex = Math.floor(length /2);
  
  while (middleIndex) {
      head = head.next;
      middleIndex--
  }
  return head
};
