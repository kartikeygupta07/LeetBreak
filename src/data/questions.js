const questions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    pattern: "Hash Map",
    complexity: "Time: O(n) · Space: O(n)",
    constraints: "2 ≤ nums.length ≤ 10⁴, -10⁹ ≤ nums[i] ≤ 10⁹",
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    pseudocode: [
      "for each number in array:",
      "  check if (target - number) seen before",
      "  if yes, return both indices",
      "  else, store number and its index",
    ],
  },
  {
    id: 2,
    title: "Binary Search",
    difficulty: "Easy",
    pattern: "Binary Search",
    complexity: "Time: O(log n) · Space: O(1)",
    constraints: "1 ≤ nums.length ≤ 10⁴, array is sorted",
    leetcodeUrl: "https://leetcode.com/problems/binary-search/",
    pseudocode: [
      "set low = 0, high = length - 1",
      "while low <= high:",
      "  mid = (low + high) / 2",
      "  if nums[mid] == target: return mid",
      "  else adjust low or high",
    ],
  },
  { id: 3, title: "Valid Parentheses", difficulty: "Easy", pattern: "Stack", complexity: "Time: O(n) · Space: O(n)", constraints: "1 ≤ s.length ≤ 10⁴", leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/", pseudocode: ["for each character:", "  if opening bracket, push to stack", "  if closing bracket, check top of stack matches", "  return true if stack empty at end"] },
  { id: 4, title: "Merge Intervals", difficulty: "Medium", pattern: "Sorting", complexity: "Time: O(n log n) · Space: O(n)", constraints: "1 ≤ intervals.length ≤ 10⁴", leetcodeUrl: "https://leetcode.com/problems/merge-intervals/", pseudocode: ["sort intervals by start time", "for each interval:", "  if overlaps with last merged, extend it", "  else, add as new interval"] },
  { id: 5, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", pattern: "Sliding Window", complexity: "Time: O(n) · Space: O(min(n, m))", constraints: "0 ≤ s.length ≤ 5 × 10⁴", leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", pseudocode: ["use two pointers, left and right", "expand right, track seen characters", "if repeat found, move left forward", "track max window size"] },
]

export default questions