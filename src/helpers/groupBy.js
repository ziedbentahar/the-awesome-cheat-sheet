export default function groupBy(arr, key) {
  return arr.reduce((sum, item) => {
    const groupByVal = item[key];
    let groupedItems = sum.get(groupByVal) || [];
    groupedItems.push(item);
    return sum.set(groupByVal, groupedItems);
  }, new Map());
}
