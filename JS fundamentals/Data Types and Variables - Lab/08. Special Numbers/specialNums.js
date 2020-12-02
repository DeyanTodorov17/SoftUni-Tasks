function solution(n) {
  for (let i = 1; i <= n; i++) {
    let sum = i
      .toString()
      .split("")
      .reduce((a, b) => {
        a += Number(b);
        return a;
      }, 0);
      if(sum === 5 || sum === 7 || sum === 11){
          console.log(`${i} -> True`)
      }else{
        console.log(`${i} -> False`)
      }
  }
}
