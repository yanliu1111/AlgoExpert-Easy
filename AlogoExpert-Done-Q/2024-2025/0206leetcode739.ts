//leetcode739. 每日温度
//请根据每日 气温 列表 temperatures ，重新生成一个列表，对应位置的输入是你需要再等待多久温度升高的天数。如果之后都不会升高，请输入 0 来代替。
//注意：气温列表的长度是 n ，对于每个 i ，其数据是 0 <= temperatures[i] <= 100。we use stack
//how to define top.

function dailyTemperatures(T: number[]): number[] {
  const stack: number[] = [];
  const res: number[] = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
}
