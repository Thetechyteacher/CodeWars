// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
    function getDivisorsCnt(n) {
        var cnt = 1;
        for (var i = 0; i <= n / 2; ++i)
          if (n % i == 0)
            ++cnt;
        return cnt;
      }
          
      
      
      console.log(getDivisorsCnt(4))